import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { formatDateString } from '../../../../../utils/functions.jsx'
import './TableView.scss'
import { editTaskStatus } from '../../../../../utils/RequestsAPI/MainTasks.jsx'
import editSVG from '../../../../../../../../../assets/tableview/edit.svg'
import deleteSVG from '../../../../../../../../../assets/tableview/delete.svg'
import PlaceholderLoading from '../../../../../utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx'

const TableView = (props) => {
  // const [statuses, setStatuses] = {
  //   Проблема: {
  //     className: 'problem',
  //   },
  //   Материалы: {
  //     className: 'materials',
  //   },
  //   Выполнено: {
  //     className: 'completed',
  //   },
  //   'В процессе': {
  //     className: 'in-progress',
  //   },
  //   Отложено: {
  //     className: 'delayed',
  //   },
  // }
  const [isLoading, setIsLoading] = useState(true)

  const handleConditionChange = (event) => {
    const condition = event.target.value
    const id = event.target.getAttribute('id')
    editTaskStatus(
      {
        condition: condition,
      },
      id,
    )
      .then(() => {
        props.loadData()
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    props.data.length > 0 && setIsLoading(false)
  }, [props.data])

  return (
    <div className="tableview_general_tasks">
      <div className="main-window">
        <div className="main-window__list">
          <div className="main-window__list-item main-window__list-item--header">
            <span>Дата постановки</span>
            <span>Описание</span>
            <span>Ответственный</span>
            <span>Дата контроля</span>
            <span>Состояние</span>
            <span>Статус</span>
            <div className="main-window__actions">Действия</div>
          </div>
          {props.isLoading && (
            <PlaceholderLoading
              itemClassName="main-window__list-item"
              minHeight="50px"
              items={10}
            />
          )}
          {props.data.map(
            (task, task_id) =>
              (props.userHasAccess(['ROLE_ADMIN']) ||
                props.userData.username === task.responsible) && (
                <div
                  key={task_id}
                  className={
                    'main-window__list-item main-window__list-item--' +
                    props.taskStatuses.find(
                      (status) => status.name === task.condition,
                    )?.className
                  }
                >
                  <span>
                    <div className="main-window__mobile-text">
                      Дата постановки:
                    </div>
                    {formatDateString(task.dateCreated)}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">Описание:</div>
                    {task.description}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">
                      Ответственный:
                    </div>
                    {task.responsible}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">
                      Дата контроля:
                    </div>
                    {/* {formatDateString(task.dateControl)} */}
                    {new Date(task.dateControl) < new Date() &&
                    task.condition !== 'Выполнено' ? (
                      <div className="main-window__reminder">
                        <div>!</div>
                        <div>{formatDateString(task.dateControl)}</div>
                      </div>
                    ) : (
                      formatDateString(task.dateControl)
                    )}
                  </span>
                  <span>
                    <div className="main-window__mobile-text">Состояние:</div>
                    {task.status}
                  </span>
                  <span
                    className={
                      'main-window__list-item--' +
                      props.taskStatuses.find(
                        (status) => status.name === task.condition,
                      )?.className
                    }
                  >
                    <div className="main-window__mobile-text">Статус:</div>
                    <select
                      id={task.id}
                      className="main-window__status_select"
                      value={task.condition}
                      onChange={handleConditionChange}
                    >
                      <option>Материалы</option>
                      <option>Выполнено</option>
                      <option>В процессе</option>
                      <option>Отложено</option>
                      <option>Проблема</option>
                    </select>
                  </span>
                  <div className="main-window__actions">
                    {props.userHasAccess([
                      'ROLE_ADMIN',
                      'ROLE_DISPATCHER',
                      'ROLE_ENGINEER',
                      'ROLE_WORKSHOP',
                    ]) && (
                      <Link
                        to={'/dispatcher/general-tasks/edit/' + task.id}
                        className="main-window__action"
                        title="Редактировать задачу"
                      >
                        <img className="main-window__img" src={editSVG} />
                      </Link>
                    )}
                    {props.userHasAccess(['ROLE_ADMIN']) && (
                      <div
                        className="main-window__action"
                        title="Удалить задачу"
                        onClick={() => {
                          props.deleteItem(task.id)
                        }}
                      >
                        <img className="main-window__img" src={deleteSVG} />
                      </div>
                    )}
                  </div>
                </div>
              ),
          )}
        </div>
      </div>
    </div>
  )
}

export default TableView
