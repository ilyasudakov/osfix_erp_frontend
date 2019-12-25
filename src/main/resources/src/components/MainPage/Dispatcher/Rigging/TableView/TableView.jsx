import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import sortIcon from '../../../../../../../../../assets/tableview/sort_icon.png';
import './TableView.scss';

const TableView = (props) => {
    const [sortOrder, setSortOrder] = useState({
        curSort: 'id',
        date: 'desc'
    })
    const [partsVisible, setPartsVisible] = useState([])

    const changeSortOrder = (event) => {
        const name = event.target.getAttribute("name");
        setSortOrder({
            curSort: name,
            [name]: (sortOrder[name] === "desc" ? "asc" : "desc")
        })
    }

    const searchQuery = (data) => {
        let re = /[.,\s]/gi;
        const query = props.searchQuery.toLowerCase();
        return data.filter(item => (
            item.id.toString().includes(query) ||
            item.comment.toLowerCase().includes(query) ||
            item.number.toLowerCase().replace(re, '').includes(query.replace(re, ''))
        ))
    }

    const sortStamps = (data) => {
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

    useEffect(() => {
        let temp = [];
        props.data.map((element, index) => (
            temp.push({
                id: element.id,
                hidden: true
            })
        ));
        setPartsVisible([
            ...temp,
        ]);
    }, [])

    const checkPart = (index) => {
        index = Number.parseInt(index);
        return partsVisible.map((element, element_index) => {
            if (element.id == index) {
                let temp2 = Object.assign({
                    id: index,
                    hidden: !element.hidden
                })
                return temp2;
            }
            return (element);
        })
    }

    const isPartHidden = (index) => {
        index = Number.parseInt(index);
        let check = true;
        partsVisible.map((element) => {
            if (element.id === index) {
                check = element.hidden;
            }
        })
        return check;
    }

    const handleClickStamp = (event) => {
        let id = event.currentTarget.getAttribute('id');
        setPartsVisible([...checkPart(id)]);
    }

    return (
        <div className="tableview_stamps">
            <div className="tableview_stamps__row tableview_stamps__row--header">
                <div className="tableview_stamps__col">
                    <span>ID</span>
                    <img name="id" className="tableview_stamps__img" onClick={changeSortOrder} src={sortIcon} />
                </div>
                <div className="tableview_stamps__col">Артикул</div>
                <div className="tableview_stamps__col">Название</div>
                <div className="tableview_stamps__col">Кол-во</div>
                <div className="tableview_stamps__col">Местоположение</div>
                <div className="tableview_stamps__col">Комментарий</div>
                <div className="tableview_stamps__col">Распил/габариты</div>
                <div className="tableview_stamps__col">Фрезеровка/точение</div>
                <div className="tableview_stamps__col">Закалка</div>
                <div className="tableview_stamps__col">Шлифовка</div>
                <div className="tableview_stamps__col">Эрозия</div>
                <div className="tableview_stamps__col">Проверка</div>
                <div className="tableview_stamps__col">Действия</div>
            </div>
            {sortStamps(props.data).map((stamp, stamp_id) => (
                <React.Fragment>
                    <div
                        id={stamp.id}
                        className={"tableview_stamps__row " + (stamp.id % 2 === 0 ? "tableview_stamps__row--even" : "tableview_stamps__row--odd")}
                        onClick={handleClickStamp}
                    >
                        <div className="tableview_stamps__col">{stamp.id}</div>
                        <div className="tableview_stamps__col">{stamp.number}</div>
                        <div className="tableview_stamps__col">{stamp.name}</div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__col"></div>
                        <div className="tableview_stamps__actions">
                            <Link to={"/dispatcher/rigging/" + (
                                props.location.pathname.includes("/dispatcher/rigging/stamp") && "stamp" ||
                                props.location.pathname.includes("/dispatcher/rigging/machine") && "machine" ||
                                props.location.pathname.includes("/dispatcher/rigging/press-form") && "press-form"
                            ) + "/view/" + stamp.id} className="tableview_stamps__action">Просмотр</Link>
                            <Link to={"/dispatcher/rigging/" + (
                                props.location.pathname.includes("/dispatcher/rigging/stamp") && "stamp" ||
                                props.location.pathname.includes("/dispatcher/rigging/machine") && "machine" ||
                                props.location.pathname.includes("/dispatcher/rigging/press-form") && "press-form"
                            ) + "/edit/" + stamp.id} className="tableview_stamps__action">Редактировать</Link>
                            {props.userHasAccess(['ROLE_ADMIN']) && <div data-id={stamp.id} className="tableview_stamps__action" onClick={props.deleteItem}>Удалить</div>}
                        </div>
                    </div>
                    <div id={stamp_id} className={"tableview_stamps__parts " + ((isPartHidden(stamp.id) === true) && "tableview_stamps__parts--hidden")}>
                        {stamp.parts.map((part, index) => (
                            <div key={index} className={"tableview_stamps__row " + (part.id % 2 === 0 ? "tableview_stamps__row--even" : "tableview_stamps__row--odd")}>
                                <div className="tableview_stamps__col">{part.id}</div>
                                <div className="tableview_stamps__col">{part.number}</div>
                                <div className="tableview_stamps__col">{part.name}</div>
                                <div className="tableview_stamps__col">{part.amount}</div>
                                <div className="tableview_stamps__col">{part.location}</div>
                                <div className="tableview_stamps__col">{part.comment}</div>
                                <div className="tableview_stamps__col">{part.cuttingDimensions}</div>
                                <div className="tableview_stamps__col">{part.milling}</div>
                                <div className="tableview_stamps__col">{part.harding}</div>
                                <div className="tableview_stamps__col">{part.grinding}</div>
                                <div className="tableview_stamps__col">{part.erosion}</div>
                                <div className="tableview_stamps__col">{part.check}</div>
                                <div className="tableview_stamps__actions">
                                    <Link to={"/dispatcher/rigging/" + (
                                        props.location.pathname.includes("/dispatcher/rigging/stamp") && "stamp" ||
                                        props.location.pathname.includes("/dispatcher/rigging/machine") && "machine" ||
                                        props.location.pathname.includes("/dispatcher/rigging/press-form") && "press-form"
                                    ) + "/edit-part/" + stamp.id + '/' + part.id} className="tableview_stamps__action">Редактировать</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </React.Fragment>
            ))}
        </div>
    )
}

export default withRouter(TableView);