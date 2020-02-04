import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sortIcon from '../../../../../../../../../assets/tableview/sort_icon.png';
import { formatDateString } from '../../../../../utils/functions.jsx';
import './TableView.scss';

const TableView = (props) => {
    const [sortOrder, setSortOrder] = useState({
        curSort: 'date',
        date: 'asc'
    })

    const changeSortOrder = (event) => {
        const name = event.target.getAttribute("name");
        setSortOrder({
            curSort: name,
            [name]: (sortOrder[name] === "desc" ? "asc" : "desc")
        })
    }

    const searchQuery = (data) => {
        const query = props.searchQuery.toLowerCase();
        return data.filter(item => (
            item.cargo.toLowerCase().includes(query) ||
            formatDateString(item.date).includes(query) ||
            item.sender.toLowerCase().includes(query) ||
            item.recipient.toLowerCase().includes(query) ||
            item.driver.toLowerCase().includes(query) ||
            item.id.toString().includes(query)
        ))
    }

    const sortTransportations = (data) => {
        return searchQuery(data).sort((a, b) => {
            if (a[sortOrder.curSort] < b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? -1 : 1);
            }
            if (a[sortOrder.curSort] > b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? 1 : -1);
            }
            return 0;
        })
    }

    return (
        <div className="tableview_transportation">
            <div className="tableview_transportation__row tableview_transportation__row--header">
                {/* <div className="tableview_transportation__col">
                    <span>ID</span>
                    <img name="id" className="tableview_transportation__img" onClick={changeSortOrder} src={sortIcon} />
                </div> */}
                <div className="tableview_transportation__col">
                    <span>Дата</span>
                    <img name="date" className="tableview_transportation__img" onClick={changeSortOrder} src={sortIcon} />
                </div>
                <div className="tableview_transportation__col">Товар</div>
                <div className="tableview_transportation__col">Кол-во</div>
                <div className="tableview_transportation__col">Откуда</div>
                <div className="tableview_transportation__col">Куда</div>
                <div className="tableview_transportation__col">Водитель</div>
                <div className="tableview_transportation__col">Действия</div>
            </div>
            {sortTransportations(props.data).map((transportation, transportation_id) => (
                <div key={transportation_id} className="tableview_transportation__row tableview_transportation__row--even" >
                    {/* <div className="tableview_transportation__col">{transportation.id}</div> */}
                    <div className="tableview_transportation__col">{formatDateString(transportation.date)}</div>
                    <div className="tableview_transportation__col">{transportation.cargo}</div>
                    <div className="tableview_transportation__col">{transportation.quantity}</div>
                    <div className="tableview_transportation__col">{transportation.sender}</div>
                    <div className="tableview_transportation__col">{transportation.recipient}</div>
                    <div className="tableview_transportation__col">{transportation.driver}</div>
                    <div className="tableview_transportation__actions">
                        {/* <Link to={"/transportation/view/" + transportation.id} className="tableview_transportation__action">Просмотр</Link> */}
                        <Link to={"/dispatcher/transportation/edit/" + transportation.id} className="tableview_transportation__action">Редактировать</Link>
                        {props.userHasAccess(['ROLE_ADMIN']) && <div data-id={transportation.id} className="tableview_transportation__action" onClick={props.deleteItem}>Удалить</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableView;