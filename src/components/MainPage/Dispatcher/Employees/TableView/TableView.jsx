import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import editIcon from 'Assets/tableview/edit.svg';
import deleteIcon from 'Assets/tableview/delete.svg';
import printSVG from 'Assets/tableview/print.svg';
import './TableView.scss';
import {
  changeVisibilityOfListItem,
  formatDateString,
} from 'Utils/functions.jsx';
import { getEmployeesByWorkshopListPdfText } from '../functions.js';
import PlaceholderLoading from 'Utils/TableView/PlaceholderLoading/PlaceholderLoading.jsx';
import { sortByField } from 'Utils/sorting/sorting';
import { filterEmployeesBySearchQuery } from '../functions.js';

const TableView = (props) => {
  const workshops = [
    'ЦехЛЭМЗ',
    'ЦехЛепсари',
    'ЦехЛиговский',
    'Офис',
    'Уволенные',
  ];
  const [workshopsVisible, setWorkshopsVisible] = useState([]);

  const sortEmployees = (data) => {
    return sortByField(filterEmployeesBySearchQuery(data, props.searchQuery), {
      fieldName: 'lastName',
      direction: 'asc',
    });
  };

  const isWorkshopHidden = (index) => {
    index = Number.parseInt(index);
    let check = true;
    workshopsVisible.map((element) => {
      if (element.id === index) {
        check = element.hidden;
      }
    });
    return check;
  };

  const handleClickWorkshop = (index) => {
    setWorkshopsVisible([
      ...changeVisibilityOfListItem(workshopsVisible, index),
    ]);
  };

  const filterEmployees = (data, workshopItem) => {
    return data.filter(
      (employee) =>
        (workshopItem === employee.workshop &&
          employee.relevance !== 'Уволен') ||
        (workshopItem === 'Уволенные' && employee.relevance === 'Уволен'),
    );
  };

  useEffect(() => {
    if (workshopsVisible.length === 0) {
      let temp = [];
      workshops.map((element, index) =>
        temp.push({
          id: index,
          hidden: true,
        }),
      );
      setWorkshopsVisible([...temp]);
    }
  }, [props.data]);

  return (
    <div className="tableview-employees">
      <div className="main-window__list main-window__list--full">
        <div className="main-window__list-item main-window__list-item--header">
          <span>Подразделение</span>
          <div className="main-window__actions">Действия</div>
        </div>
        {workshops.map((item, index) => {
          const sortedEmployees = sortEmployees(
            filterEmployees(props.data, item),
          );
          return (
            <>
              <div
                className="main-window__list-item"
                onClick={() => handleClickWorkshop(index)}
              >
                <span>
                  <div className="main-window__mobile-text">Подразделение:</div>
                  {item}
                  {item !== 'Уволенные' ? (
                    <span className="main-window__items-count">
                      {
                        filterEmployeesBySearchQuery(
                          sortedEmployees,
                          props.searchQuery,
                        ).length
                      }
                    </span>
                  ) : null}
                </span>
                <div className="main-window__actions">
                  <div
                    className="main-window__action"
                    onClick={() => {
                      getEmployeesByWorkshopListPdfText(sortedEmployees, item);
                    }}
                    title="Печать"
                  >
                    <img className="main-window__img" src={printSVG} alt="" />
                    Печать
                  </div>
                </div>
              </div>
              <div
                className={
                  isWorkshopHidden(index)
                    ? 'main-window__list-options main-window__list-options--hidden'
                    : 'main-window__list-options'
                }
              >
                <div className="main-window__list">
                  <div className="main-window__list-item main-window__list-item--header">
                    <span>ФИО</span>
                    <span>Дата рождения</span>
                    <span>Гражданство</span>
                    <span>Должность</span>
                    <div className="main-window__actions">Действия</div>
                  </div>
                  {props.isLoading && (
                    <PlaceholderLoading
                      itemClassName="main-window__list-item"
                      minHeight="35px"
                      items={8}
                    />
                  )}
                  {sortedEmployees.map((employee, employee_id) => (
                    <div key={employee_id} className={'main-window__list-item'}>
                      <span>
                        <div className="main-window__mobile-text">ФИО:</div>
                        {`${employee.lastName} ${employee.name} ${employee.middleName}`}
                      </span>
                      <span>
                        <div className="main-window__mobile-text">
                          Дата рождения:
                        </div>
                        <div>
                          {employee.dateOfBirth
                            ? formatDateString(employee.dateOfBirth)
                            : null}
                        </div>
                      </span>
                      <span>
                        <div className="main-window__mobile-text">
                          Гражданство:
                        </div>
                        {employee.citizenship}
                      </span>
                      <span>
                        <div className="main-window__mobile-text">
                          Должность:
                        </div>
                        {employee.position}
                      </span>
                      <div className="main-window__actions">
                        <Link
                          to={`/dispatcher/employees/edit/${employee.id}`}
                          className="main-window__action"
                          title="Редактирование"
                        >
                          <img
                            className="main-window__img"
                            src={editIcon}
                            alt=""
                          />
                        </Link>
                        {props.userHasAccess(['ROLE_ADMIN']) && (
                          <div
                            className="main-window__action"
                            onClick={() => props.deleteItem(employee.id)}
                            title="Удалить"
                          >
                            <img
                              className="main-window__img"
                              src={deleteIcon}
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default TableView;