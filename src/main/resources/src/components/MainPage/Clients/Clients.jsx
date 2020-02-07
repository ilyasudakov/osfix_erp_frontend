import React, { useState, useEffect } from 'react';
import './Clients.scss';
import '../../../utils/MainWindow/MainWindow.scss';
import { getClients, deleteClient } from '../../../utils/RequestsAPI/Clients.jsx';
import TableDataLoading from '../../../utils/TableView/TableDataLoading/TableDataLoading.jsx';
import SearchBar from '../SearchBar/SearchBar.jsx';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    const deleteItem = (event) => {
        const id = event.target.dataset.id;
        deleteClient(id)
            .then(() => getClients())
            .then(res => res.json())
            .then((clients) => {
                setClients(clients);
            })
    }

    const loadData = () => {
        // getClients()
        //     .then(res => res.json())
        //     .then((clients) => {
        //         setClients(clients);
        //         setIsLoading(false);
        //     })
        setClients([
            {
                name: 'СБЕРБАНК РОССИИ',
                legalEntity: '3',
                INN: '7707083893',
                KPP: '3',
                OGRN: '3',
                BIK: '3',
                checkingAccount: '3',
                legalAddress: '3',
                factualAddress: '3',
                contacts: '3',
                site: '3',
                comment: 'Готовы! Буквы с радиусом 102,56 (1 запасная у Паши без)',
                storageAddress: '3',
                WorkConditions: '3',
                price: '3',
                discount: '3',
                check: '3',
                workHistory: '3',
                clientType: 'Активные'
            }
        ])
        setIsLoading(false);
    }

    useEffect(() => {
        document.title = "Клиенты";
        loadData();
    }, [])

    return (
        <div className="clients">
            <div className="main-window">
                <div className="main-window__title">Клиенты</div>
                <SearchBar
                    title="Поиск по клиентам"
                    placeholder="Введите запрос для поиска..."
                    setSearchQuery={setSearchQuery}
                />
                <div className="main-window__info-panel">
                    <div className="main-window__amount_table">Всего: {clients.length} записей</div>
                </div>
                <div className="clients__list">
                    <div className="clients__item clients__item--header">
                        <span>Название</span>
                        <span>ИНН</span>
                        <span>Контакты</span>
                        <span>Комментарий</span>
                        <div className="clients__actions">Действие</div>
                    </div>
                    {isLoading && <TableDataLoading
                        className="clients__item"
                        minHeight="20px"
                    />}
                    {clients.map((item) => {
                        return <div className="clients__item">
                            <span>{item.name}</span>
                            <span>{item.INN}</span>
                            <span>{item.contacts}</span>
                            <span>{item.comment}</span>
                            <div className="clients__actions">
                                <div className="clients__action" onClick={() => { }}>Просмотр</div>
                                <div className="clients__action" onClick={() => { }}>Редактировать</div>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Clients;