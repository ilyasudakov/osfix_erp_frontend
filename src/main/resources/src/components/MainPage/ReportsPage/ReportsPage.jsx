import React, { useState, useEffect, useContext } from "react";
import "./ReportsPage.scss";
import "../../../utils/MainWindow/MainWindow.scss";
import UserContext from "../../../App.js";

import tasksImg from "../../../../../../../assets/sidemenu/tasks.svg";
import clientImg from "../../../../../../../assets/sidemenu/client.svg";
import listImg from "../../../../../../../assets/sidemenu/list.svg";
import boxImg from "../../../../../../../assets/sidemenu/box.svg";
import playListImg from "../../../../../../../assets/sidemenu/play_list.svg";
import supplierIcon from "../../../../../../../assets/sidemenu/supplier_icon.svg";
import workTimeIcon from "../../../../../../../assets/sidemenu/work_time_icon.svg";
import graphIcon from "../../../../../../../assets/graph-icon.svg";
import statsIcon from "../../../../../../../assets/statistics/stats-alt.svg";

import Button from "../../../utils/Form/Button/Button.jsx";

const ReportsPage = (props) => {
  const userContext = useContext(UserContext);

  useEffect(() => {
    document.title = "Отчеты";
  }, []);

  const [menuItems, setMenuItems] = useState({
    "Учет времени": [
      {
        linkTo: "/reports/employee",
        name: "Отчет сотрудника",
        access: ["ROLE_ADMIN"],
        icon: workTimeIcon,
      },
    ],
  });

  return (
    <div className="reports-page">
      <div className="main-window">
        <div className="main-window__header main-window__header--full">
          <div className="main-window__title">Отчеты</div>
        </div>
        <div className="reports-page__buttons">
          {/* {console.log(Object.entries(menuItems))} */}
          {Object.entries(menuItems).map((category) => {
            return (
              <div className="reports-page__category">
                {category[1].map((item) => {
                  if (userContext.userHasAccess(item.access)) {
                    return (
                      <Button
                        onClick={() => {
                          props.history.push(item.linkTo);
                        }}
                        imgSrc={item.icon}
                        text={item.name}
                        className="main-window__button"
                      />
                    );
                  }
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReportsPage;
