import React from 'react'
import PlaceholderLoading from '../../../../utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx'
import { formatDateStringNoYear } from '../../../../utils/functions.jsx'
import { conditions } from './objects.js'
import { Link } from 'react-router-dom'

const TasksList = ({ tasks, isLoading, controlDates }) => {
  return (
    <div className="tasks-widget__list">
      {isLoading ? (
        <PlaceholderLoading
          itemClassName="list__item"
          minHeight="2rem"
          items={3}
        />
      ) : (
        Object.entries(controlDates).map((date, index) => {
          const isExpired = date[0] < formatDateStringNoYear(new Date())
          return (
            <ListWrapper
              isExpired={isExpired}
              index={index}
              date={date}
              tasks={tasks}
            />
          )
        })
      )}
    </div>
  )
}

export default TasksList

const ListWrapper = ({ isExpired, index, date, tasks }) => {
  return (
    <div
      className={`tasks-widget__date-wrapper ${
        isExpired ? 'tasks-widget__date-wrapper--expired' : ''
      }`}
      key={index}
    >
      <div
        className={`tasks-widget__date ${
          isExpired ? 'tasks-widget__date--expired' : ''
        }`}
      >{`до ${date[0]}`}</div>
      {tasks
        .filter((task) => {
          const curDate = formatDateStringNoYear(task.dateControl)
          return curDate === date[0]
        })
        .map((task) => (
          <ListItem task={task} />
        ))}
    </div>
  )
}

const ListItem = ({ task }) => {
  return (
    <div className={`list__item list__item--${conditions[task.condition]}`}>
      <Link
        className="list-item__general-info"
        to={`/dispatcher/general-tasks/edit/${task.id}`}
      >
        <span className="list-item__description">{task.description}</span>
        <span className="list-item__conditions">
          <span>{task.condition}</span>
          <span>{task.status}</span>
        </span>
      </Link>
    </div>
  )
}