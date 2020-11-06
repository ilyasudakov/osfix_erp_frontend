import React, { useState, useEffect } from 'react'
import './SelectWorkItem.scss'
import FormWindow from '../../../../utils/Form/FormWindow/FormWindow.jsx'
import SearchBar from '../../SearchBar/SearchBar.jsx'
import { getWork } from '../../../../utils/RequestsAPI/WorkManaging/WorkList.jsx'
import TableView from './TableViewWork/TableView.jsx'

const SelectWorkItem = (props) => {
  const [showWindow, setShowWindow] = useState(false)
  const [works, setWorks] = useState([])
  const [workType, setWorkType] = useState('Продукция')
  const [searchQuery, setSearchQuery] = useState('')
  const [id, setId] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    works.length === 0 && loadWorks()
  }, [])

  const loadWorks = () => {
    setIsLoading(true)
    getWork()
      .then((res) => res.json())
      .then((res) => {
        setWorks(res)
        setIsLoading(false)
      })
      .catch((error) => {
          console.log(error)
          setIsLoading(false)
      })
  }

  const clickWork = (employeeName, employeeId, newWorkType) => {
    setId(employeeId)
    setFullName(employeeName)
    setWorkType(newWorkType)
    props.handleWorkItemChange(employeeName, employeeId, newWorkType)
    setShowWindow(!showWindow)
  }

  return (
    <div className="select-work-item">
      <div className="select-work-item__input">
        <div className="select-work-item__input_name">
          {props.inputName + (props.required ? '*' : '')}
        </div>
        <div className="select-work-item__input_field">
          <button
            className="select-work-item__button"
            onClick={(e) => {
              e.preventDefault()
              setShowWindow(!showWindow)
            }}
          >
            Выбрать тип работы
          </button>
          <div className="select-work-item__searchbar">
            <input
              type="text"
              className={
                props.error === true
                  ? 'select-work-item__input select-work-item__input--error'
                  : 'select-work-item__input'
              }
              // onChange={props.handleInputChange}
              value={props.defaultValue ? props.defaultValue : fullName}
              // onClick={!props.readOnly ? clickOnInput : null}
              placeholder="Выберите работу, нажав на кнопку 'Выбрать тип работы'"
              readOnly={props.readOnly}
            />
          </div>
        </div>
      </div>
      {props.error === true && (
        <div
          className="select-work-item__error"
          onClick={
            props.setErrorsArr
              ? () =>
                  props.setErrorsArr({
                    ...props.errorsArr,
                    [props.name]: false,
                  })
              : null
          }
        >
          Поле не заполнено!
        </div>
      )}
      <FormWindow
        title="Выбор работы"
        windowName="select-work-item"
        id={props.id}
        content={
          <React.Fragment>
            <SearchBar
              // title="Поиск по работам"
              fullSize
              setSearchQuery={setSearchQuery}
              placeholder="Введите название работы для поиска..."
            />
            <TableView
              data={works}
              searchQuery={searchQuery}
              userHasAccess={props.userHasAccess}
              selectWork={clickWork}
              fullName={fullName}
              isLoading={isLoading}
              showWindow={showWindow}
              setShowWindow={setShowWindow}
            />
          </React.Fragment>
        }
        showWindow={showWindow}
        setShowWindow={setShowWindow}
      />
    </div>
  )
}

export default SelectWorkItem
