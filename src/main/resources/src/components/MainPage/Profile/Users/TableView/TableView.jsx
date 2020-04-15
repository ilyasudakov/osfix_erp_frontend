import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sortIcon from '../../../../../../../../../assets/tableview/sort_icon.png';
import './TableView.scss';
import TableDataLoading from '../../../../../utils/TableView/TableDataLoading/TableDataLoading.jsx';

const TableView = (props) => {
    const [sortOrder, setSortOrder] = useState({
        curSort: 'username',
        id: 'desc'
    })
    const [isLoading, setIsLoading] = useState(true);

    const changeSortOrder = (event) => {
        const name = event.target.getAttribute("name");
        setSortOrder({
            curSort: name,
            [name]: (sortOrder[name] === "desc" ? "asc" : "desc")
        })
    }

    const searchQuery = (data) => {
        return data.filter(item => item.username.toLowerCase().includes(props.searchQuery.toLowerCase()))
    }

    const sortUsers = (data) => {
        return searchQuery(data).sort((a, b) => {
            if (a[sortOrder.curSort] < b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? 1 : -1);
            }
            if (a[sortOrder.curSort] > b[sortOrder.curSort]) {
                return (sortOrder[sortOrder.curSort] === "desc" ? -1 : 1);
            }
            return 0;
        })
    }

    useEffect(() => {
        props.data.length > 0 && setIsLoading(false)
    }, [props.data])

    return (
        <div className="tableview_users">
            <div className="tableview_users__row tableview_users__row--header">
                {/* <div className="tableview_users__col">
                    <span>ID</span>
                    <img name="id" className="tableview_users__img" onClick={changeSortOrder} src={sortIcon} />
                </div> */}
                <div className="tableview_users__col">Имя пользователя</div>
                <div className="tableview_users__col">Эл. почта</div>
                <div className="tableview_users__col">Роль</div>
                <div className="tableview_users__col">Действия</div>
            </div>
            {isLoading && <TableDataLoading
                minHeight='50px'
                className="ttableview_users__row ttableview_users__row--even"
            />}
            {sortUsers(props.data).map((user, user_id) => (
                <div key={user_id} className="tableview_users__row tableview_users__row--even">
                    {/* <div className="tableview_users__col">{user.id}</div> */}
                    <div className="tableview_users__col">{user.username}</div>
                    <div className="tableview_users__col">{user.email}</div>
                    <div className="tableview_users__col">{user.roles.map((item) => {
                        return (item.name === "ROLE_ADMIN" ? "Руководитель "
                            : item.name === "ROLE_MANAGER" ? "Менеджер1 "
                                : item.name === "ROLE_USER" ? "Пользователь "
                                    : item.name === "ROLE_DISPATCHER" ? "Диспетчер "
                                        : item.name === "ROLE_ENGINEER" ? "Инженер "
                                            : item.name === "ROLE_LEMZ" ? "Цех ЛЭМЗ "
                                                : item.name === "ROLE_LEPSARI" ? "Цех Лепсари "
                                                    : item.name === "ROLE_LIGOVSKIY" ? "Цех Лиговский "
                                                        : null)
                    })}</div>
                    <div className="tableview_users__actions">
                        {/* <div data-id={user.id} className="tableview_users__action" >Просмотр</div> */}
                        <Link className="tableview_users__action" to={"/profile/users/edit/" + user.id}>Редактировать</Link>
                        {props.userHasAccess(['ROLE_ADMIN']) && <div data-id={user.id} className="tableview_users__action" onClick={props.deleteItem}>Удалить</div>}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default TableView;