import React, { useContext, useState } from "react";
import "./WorkshopOrders.scss";
import SearchBar from "../../SearchBar/SearchBar.jsx";
import { formatDateString } from "../../../../utils/functions.jsx";
import {
  deleteProductFromOrder,
  deleteOrder,
  getOrdersByName,
} from "../../../../utils/RequestsAPI/Workshop/Orders.jsx";
import FloatingPlus from "../../../../utils/MainWindow/FloatingPlus/FloatingPlus.jsx";
import ControlPanel from "../../../../utils/MainWindow/ControlPanel/ControlPanel.jsx";
import UserContext from "../../../../App.js";
import Tableview from "./Table.jsx";
import { sortByField } from "../../../../utils/sorting/sorting";

const WorkshopOrders = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [orders, setOrders] = useState([]);
  const userContext = useContext(UserContext);
  const [statuses, setStatuses] = useState([
    {
      className: "sent",
      name: "Отправлено",
      visible: true,
    },
    {
      className: "completed",
      name: "Завершено",
      visible: false,
    },
    {
      className: "ordered",
      name: "Заказано",
      visible: true,
    },
    {
      className: "problem",
      name: "Проблема",
      visible: true,
    },
  ]);
  const types = {
    lemz: { name: "ЦехЛЭМЗ", link: "/lemz/workshop-orders" },
    lepsari: { name: "ЦехЛепсари", link: "/lepsari/workshop-orders" },
  };

  const loadData = (signal) => {
    setIsLoading(true);
    return getOrdersByName(
      {
        name: types[props.type].name,
      },
      signal
    )
      .then((res) => res.json())
      .then((res) => {
        setOrders(res);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  const deleteItem = (orderIndex) => {
    Promise.all(
      orders[orderIndex].products.map((product) => {
        return deleteProductFromOrder(product.id);
      })
    ).then(() => {
      return deleteOrder(orders[orderIndex].id).then(() => {
        return loadData();
      });
    });
  };

  const filterOrders = (data) => {
    return data.filter((item) => {
      if (
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        formatDateString(item.deliverBy)
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        item.assembly.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        let check = false;
        statuses.map((status) => {
          if (status.visible && status.className === item.status) {
            check = true;
            return;
          }
        });
        return check;
      }
    });
  };

  const handleStatusClick = (index, status) => {
    let temp = statuses;
    temp.splice(index, 1, {
      ...status,
      visible: !status.visible,
    });
    setStatuses([...temp]);
  };

  useState(() => {
    document.title = `Комплектация ${types[props.type].name}`;
    const abortController = new AbortController();
    loadData(abortController.signal);
    setIsLoading(false);
    return function cancel() {
      abortController.abort();
    };
  }, []);

  return (
    <div className="workshop-orders">
      <div className="main-window">
        <SearchBar
          fullSize
          placeholder="Введите запрос для поиска..."
          setSearchQuery={setSearchQuery}
        />
        <FloatingPlus
          linkTo={`${types[props.type].link}/new`}
          visibility={["ROLE_ADMIN", "ROLE_ENGINEER", "ROLE_LEMZ"]}
        />
        <ControlPanel
          itemsCount={`Всего: ${orders.length} записей`}
          content={
            <div className="main-window__info-panel">
              <div className="main-window__status-panel">
                <div>Фильтр по статусам: </div>
                {statuses.map((status, index) => {
                  return (
                    <div
                      className={`main-window__button ${
                        status.visible ? "" : "main-window__button--inverted"
                      } main-window__list-item--${status.className}`}
                      onClick={() => handleStatusClick(index, status)}
                    >
                      {status.name}
                    </div>
                  );
                })}
              </div>
            </div>
          }
        />
        <Tableview
          data={sortByField(filterOrders(orders), {
            fieldName: "date",
            direction: "desc",
          })}
          link={types[props.type].link}
          isLoading={isLoading}
          statuses={statuses}
          history={props.history}
          deleteItem={deleteItem}
          userHasAccess={userContext.userHasAccess}
        />
      </div>
    </div>
  );
};

export default WorkshopOrders;