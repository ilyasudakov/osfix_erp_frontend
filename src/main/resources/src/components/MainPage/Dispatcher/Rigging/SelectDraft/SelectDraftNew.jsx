import React, { useState, useEffect, useCallback } from 'react'
import deleteSVG from '../../../../../../../../../assets/select/delete.svg'
import './SelectDraft.scss'
import TableView from './TableView/TableView.jsx'
import SearchBar from '../../../SearchBar/SearchBar.jsx'
import FormWindow from '../../../../../utils/Form/FormWindow/FormWindow.jsx'
import { getStamp } from '../../../../../utils/RequestsAPI/Rigging/Stamp.jsx'
import { getPressForm } from '../../../../../utils/RequestsAPI/Rigging/PressForm.jsx'
import { getMachine } from '../../../../../utils/RequestsAPI/Rigging/Machine.jsx'
import { getParts } from '../../../../../utils/RequestsAPI/Parts.jsx'
import Select from 'react-select'

const SelectDraftNew = (props) => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchQueryCategory, setSearchQueryCategory] = useState('')
  const [selected, setSelected] = useState([])
  const [drafts, setDrafts] = useState([])
  const [showWindow, setShowWindow] = useState(false)
  const [closeWindow, setCloseWindow] = useState(false)
  const [showOptions, setShowOptions] = useState(false)
  const [defaultValueLoaded, setDefaultValueLoaded] = useState(false)

  async function loadDrafts() {
    if (props.drafts?.length > 0) {
      setDrafts([...props.drafts])
    } else {
      let newDrafts = []
      getStamp()
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          response.map((item) => {
            return item.stampParts.map((stamp) => {
              return newDrafts.push({
                ...stamp,
                value: stamp.id,
                label: `${stamp.number}, ${stamp.name}`,
                type: 'Stamp',
              })
            })
          })
          // console.log(newDrafts);
          return setDrafts([...newDrafts])
        })
        .then(() => getPressForm())
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          response.map((item) => {
            return item.pressParts.map((stamp) => {
              return newDrafts.push({
                ...stamp,
                value: stamp.id,
                label: `${stamp.number}, ${stamp.name}`,
                type: 'Press',
              })
            })
          })
          return setDrafts([...newDrafts])
        })
        .then(() => getMachine())
        .then((response) => response.json())
        .then((response) => {
          // console.log(response)
          response.map((item) => {
            return item.benchParts.map((stamp) => {
              return newDrafts.push({
                ...stamp,
                value: stamp.id,
                label: `${stamp.number}, ${stamp.name}`,
                type: 'Bench',
              })
            })
          })
          return setDrafts([...newDrafts])
          // console.log(newDrafts)
        })
        .then(() => getParts())
        .then((res) => res.json())
        .then((res) => {
          // console.log(res)
          res.map((item) => {
            return item.detailParts.map((stamp) => {
              return newDrafts.push({
                ...stamp,
                value: stamp.id,
                label: `${stamp.number}, ${stamp.name}`,
                type: 'Detail',
              })
            })
          })
          console.log(newDrafts)
          return setDrafts([...newDrafts])
        })
    }
  }

  const clickOnOption = (id, name, type) => {
    // const { name, id, type, number } = selectedItem
    setSelected([
      ...selected,
      {
        partId: id,
        name: name,
        type: type,
        quantity: 0,
      },
    ])
    props.onChange([
      ...selected,
      {
        partId: id,
        name: name,
        type: type,
        quantity: 0,
      },
    ])
  }

  const clickOnSelected = (event) => {
    const id = event.target.getAttribute('id')
    let newSelected = selected
    newSelected.splice(id, 1)
    setSelected([...newSelected])
    props.onChange([...newSelected])
  }

  const handleParamChange = (event) => {
    const value = event.target.value
    const name = event.target.getAttribute('name')
    const id = event.target.getAttribute(name + '_id')
    let newSelected = selected
    newSelected = newSelected.map((item, index) => {
      return {
        ...item,
        [name]: index == id ? value : item[name],
      }
    })
    setSelected([...newSelected])
    props.onChange([...newSelected])
  }

  useEffect(() => {
    if (props.defaultValue !== undefined && !defaultValueLoaded) {
      setSelected([...props.defaultValue])
      setDefaultValueLoaded(true)
    }
    drafts.length === 0 && loadDrafts()
  }, [props.defaultValue, props.categories])

  return (
    <div
      className={`select-draft select-draft--new ${
        props.readOnly ? 'select-draft--readonly' : ''
      }`}
    >
      <div className="select-draft__input">
        <div className="select-draft__buttons">
          <button
            className="select-draft__search_button"
            onClick={(e) => {
              e.preventDefault()
              setShowWindow(!showWindow)
            }}
            title="Добавить чертеж"
          >
            +
          </button>
        </div>
        {!props.readOnly ? (
          <FormWindow
            title="Выбор чертежа"
            content={
              <React.Fragment>
                <SearchBar
                  // title="Поиск по чертежам"
                  fullSize
                  placeholder="Введите артикул чертежа для поиска..."
                  setSearchQuery={setSearchQueryCategory}
                />
                <TableView
                  drafts={drafts}
                  searchQuery={searchQueryCategory}
                  selectDraft={clickOnOption}
                  closeWindow={closeWindow}
                  setCloseWindow={setCloseWindow}
                  setShowWindow={setShowWindow}
                />
              </React.Fragment>
            }
            showWindow={showWindow}
            setShowWindow={setShowWindow}
          />
        ) : null}
      </div>
      {props.error === true && (
        <div
          className="select-draft__error"
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
      {selected.length > 0 ? (
        <div className="select-draft__selected">
          {selected.map((item, index) => (
            <div className="select-draft__selected_row">
              <div className="select-draft__selected_item">
                <input
                  type="text"
                  className="select-draft__selected_name"
                  name_id={index}
                  name="name"
                  autoComplete="off"
                  readOnly
                  value={`${item.number ? `${item.number}, ` : ''}${item.name}`}
                  onChange={item.type === 'new' ? handleParamChange : null}
                />
                {!props.readOnly && !props.workshop && (
                  <img
                    id={index}
                    className="select-draft__img"
                    src={deleteSVG}
                    alt=""
                    onClick={clickOnSelected}
                  />
                )}
              </div>
              <div className="select-draft__selected_quantity">
                <span className="select-draft__input-name">
                  Кол-во (шт.){!props.readOnly && '*'}
                </span>
                <input
                  quantity_id={index}
                  // type="text"
                  type="number"
                  name="quantity"
                  autoComplete="off"
                  defaultValue={item.quantity != 0 ? item.quantity : 0}
                  value={item.quantity}
                  onChange={handleParamChange}
                  readOnly={props.readOnly}
                />
              </div>
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
export default SelectDraftNew
