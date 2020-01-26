import React, { useState, useEffect } from 'react';
import './Employees.scss';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import TableView from './TableView/TableView.jsx';
import pdfMake from 'pdfmake';
import { getEmployeesListPdfText } from '../../../../utils/functions.jsx';
import { getEmployees, deleteEmployee, getEmployeesByWorkshop } from '../../../../utils/RequestsAPI/Employees.jsx';

const Employees = (props) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [employees, setEmployees] = useState([]);
    const [workshops, setWorkshops] = useState([
        'ЦехЛЭМЗ',
        'ЦехЛепсари',
        'ЦехЛиговский',
        'Офис',
        'Уволенные'
    ]);

    useEffect(() => {
        document.title = "Сотрудники";
        loadEmployees();
    }, []);

    const loadEmployees = () => {
        //Динамический
        let emplArr = [];
        workshops.map((item) => {
            let workshop = {
                workshop: item
            };
            getEmployeesByWorkshop(workshop)
                .then(res => res.json())
                .then(res => {
                    res.map(item => emplArr.push(item));
                    setEmployees([...emplArr]);
                })
        })
        //Стандартный способ
        // getEmployees()
        //     .then(res => res.json())
        //     .then(res => {
        //         // console.log(res);
        //         setEmployees(res);
        //     })
        //     .catch(error => {
        //         console.log(error);                
        //     })
    }

    const printEmployeesList = () => {
        let dd = getEmployeesListPdfText(employees, workshops);
        pdfMake.createPdf(dd).print();
    }

    const deleteItem = (event) => {
        const id = event.target.dataset.id;
        deleteEmployee(id)
            .then(() => loadEmployees())
    }

    return (
        <div className="employees">
            <div className="employees__title">Сотрудники</div>
            <SearchBar
                title="Поиск сотрудников"
                placeholder="Введите фамилию сотрудника для поиска..."
                setSearchQuery={setSearchQuery}
            />
            <div className="employees__info-panel">
                <div className="employees__button" onClick={printEmployeesList}>Печать списка</div>
                <div className="employees__amount_table">Всего: {employees.length} записей</div>
            </div>
            <TableView
                data={employees}
                searchQuery={searchQuery}
                userHasAccess={props.userHasAccess}
                deleteItem={deleteItem}
            />
        </div>
    )
}

export default Employees;