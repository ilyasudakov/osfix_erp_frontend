import React, { useEffect, useState } from 'react';
import pdfMake from 'pdfmake';
import './Transportation.scss';
import '../../../../utils/MainWindow/MainWindow.scss';
import SearchBar from '../../SearchBar/SearchBar.jsx';
import PrintIcon from '../../../../../../../../assets/print.png';
import TableView from './TableView/TableView.jsx';
import { getTransportations, deleteTransportation } from '../../../../utils/RequestsAPI/Transportation.jsx';
import ImgLoader from '../../../../utils/TableView/ImgLoader/ImgLoader.jsx';
import { getTransportationListPdfText } from '../../../../utils/pdfFunctions.jsx';

const Transportation = (props) => {
    const [transportation, setTransportation] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [workshops, setWorkshops] = useState([
        {
            name: 'ЦехЛЭМЗ',
            visibility: ['ROLE_ADMIN', 'ROLE_LEMZ'],
            senderActive: true,
            recipientActive: true
        },
        {
            name: 'ЦехЛепсари',
            visibility: ['ROLE_ADMIN', 'ROLE_LEPSARI'],
            senderActive: true,
            recipientActive: true
        },
        {
            name: 'ЦехЛиговский',
            visibility: ['ROLE_ADMIN', 'ROLE_LIGOVSKIY', 'ROLE_DISPATCHER', 'ROLE_MANAGER'],
            senderActive: true,
            recipientActive: true
        },
        {
            name: 'Офис',
            visibility: ['ROLE_ADMIN', 'ROLE_DISPATCHER', 'ROLE_MANAGER'],
            senderActive: true,
            recipientActive: true
        }
    ]);
    const printTransportationList = () => {
        let dd = getTransportationListPdfText(transportation.filter(item => {
            let senderCheck = false;
            let recipientCheck = false;
            workshops.map(workshop => {
                if (workshop.senderActive && (workshop.name === item.sender)) {
                    senderCheck = true;
                }
                if (workshop.recipientActive && (workshop.name === item.recipient)) {
                    recipientCheck = true;
                }
            })
            return (recipientCheck && senderCheck);
        }).sort((a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            if (a.date > b.date) {
                return -1;
            }
            else return 0;
        }));
        pdfMake.createPdf(dd).print();
    }

    useEffect(() => {
        document.title = "Реестр транспортировок";
        loadTransportation();
    }, [])

    const loadTransportation = () => {
        getTransportations()
            .then(res => res.json())
            .then(res => {
                setTransportation(res);
                setIsLoading(false);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteItem = (event) => {
        const id = event.target.dataset.id;
        deleteTransportation(id)
            .then(() => loadTransportation())
    }

    return (
        <div className="transportation">
            <div className="main-window">
                <div className="main-window__title">Реестр транспортировок</div>
                <SearchBar
                    title="Поиск по транспортировкам"
                    placeholder="Введите название товара для поиска..."
                    setSearchQuery={setSearchQuery}
                />
                <div className="main-window__info-panel">
                    <div className="transportation__container">
                        <div className="main-window__filter-pick">
                            <span className="transportation__text">Фильтр по подразделениям - Куда: </span>
                            {workshops.map((item, index) => {
                                if (props.userHasAccess(item.visibility)) {
                                    return <div
                                        className={item.recipientActive ? "main-window__button" : "main-window__button main-window__button--inverted"}
                                        onClick={() => {
                                            let temp = workshops;
                                            temp.splice(index, 1, {
                                                ...temp[index],
                                                name: item.name,
                                                recipientActive: !item.recipientActive
                                            })
                                            setWorkshops([...temp]);
                                        }}
                                    >{item.name}</div>
                                }
                            })}
                        </div>
                        <div className="main-window__filter-pick">
                            <span className="transportation__text">Фильтр по подразделениям - Откуда: </span>
                            {workshops.map((item, index) => {
                                if (props.userHasAccess(item.visibility)) {
                                    return <div
                                        className={item.senderActive ? "main-window__button" : "main-window__button main-window__button--inverted"}
                                        onClick={() => {
                                            let temp = workshops;
                                            temp.splice(index, 1, {
                                                ...temp[index],
                                                name: item.name,
                                                senderActive: !item.senderActive
                                            })
                                            setWorkshops([...temp]);
                                        }}
                                    >{item.name}</div>
                                }
                            })}
                        </div>
                    </div>
                    {isLoading ? <ImgLoader /> : <div className="main-window__button" onClick={printTransportationList}>
                        <img className="main-window__img" src={PrintIcon} alt="" />
                        <span>Печать списка</span>
                    </div>}
                    <div className="main-window__amount_table">Всего: {transportation.length} записей</div>
                </div>
                <TableView
                    data={transportation.filter(item => {
                        let senderCheck = false;
                        let recipientCheck = false;
                        workshops.map(workshop => {
                            if (workshop.senderActive && (workshop.name === item.sender)) {
                                senderCheck = true;
                            }
                            if (workshop.recipientActive && (workshop.name === item.recipient)) {
                                recipientCheck = true;
                            }
                        })
                        return (recipientCheck && senderCheck);
                    })}
                    searchQuery={searchQuery}
                    userHasAccess={props.userHasAccess}
                    deleteItem={deleteItem}
                />
            </div>
        </div>
    )
}

export default Transportation;