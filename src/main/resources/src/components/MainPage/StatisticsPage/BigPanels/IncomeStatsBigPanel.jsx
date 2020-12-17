import React, { useState, useEffect } from "react";
import MoneyIcon from "../../../../../../../../assets/etc/bx-ruble.inline.svg";
import { months } from "../../../../utils/dataObjects";
import { addSpaceDelimiter } from "../../../../utils/functions.jsx";
import { createGraph, loadCanvas } from "../../../../utils/graphs";
import {
  checkIfDateIsInRange,
  checkRequestsForSelectedMonth,
} from "../functions.js";
import RequestsList from "../Lists/RequestsList/RequestsList.jsx";
import SmallPanel from "../Panels/SmallPanel.jsx";
import BigPanel from "./BigPanel.jsx";
import BarChart from "../../../../utils/Charts/BarChart/BarChart.jsx";

const IncomeStatsBigPanel = ({
  requests,
  currDate,
  timeText,
  getPrevData,
  loadData,
  curPeriod,
}) => {
  const [stats, setStats] = useState({
    category: "Доход",
    percentage: 0,
    value: null,
    linkTo: "/requests",
    chartName: "IncomeStatsBigPanel",
    isLoaded: false,
    timePeriod: timeText,
    difference: 0,
    curPeriod: curPeriod,
    renderIcon: () => <MoneyIcon className="panel__img panel__img--money" />,
  });

  const getFullYearData = (requests, currDate) => {
    let monthsIncome = [];
    for (let i = 0; i < 12; i++) {
      const newRequests = checkRequestsForSelectedMonth(
        requests,
        new Date(currDate.startDate.getFullYear(), i, 1)
      );
      const totalIncome = newRequests.reduce(
        (prev, cur) => prev + Number.parseFloat(cur.sum || 0),
        0
      );
      monthsIncome.push({
        value: totalIncome,
        label: months[i],
      });
    }
    return monthsIncome;
  };

  const getStats = (requests) => {
    setStats((stats) => ({
      ...stats,
      isLoaded: false,
    }));

    let curMonthIncome = 0;
    let prevMonthIncome = 0;

    //check prev month
    let temp = requests.filter((request) => {
      const date = new Date(request.date);
      const prevMonth = getPrevData(currDate.startDate);
      if (
        checkIfDateIsInRange(date, prevMonth.startDate, prevMonth.endDate) &&
        request.status === "Завершено"
      ) {
        prevMonthIncome += Number.parseFloat(request.sum || 0);
        return false;
      }
      if (request.status !== "Завершено") {
        return false;
      }
      return true;
    });

    //check cur month
    const filteredRequests = temp.filter((request) => {
      const date = new Date(request.date);
      if (
        checkIfDateIsInRange(date, currDate.startDate, currDate.endDate) &&
        request.status === "Завершено"
      ) {
        curMonthIncome += Number.parseFloat(request.sum || 0);
        return true;
      }
      return false;
    });

    const monthsIncome = getFullYearData(requests, currDate);

    setStats((stats) => ({
      ...stats,
      isLoaded: true,
      windowContent: (
        <>
          <RequestsList
            title="Заявки за выбранный период"
            data={filteredRequests}
            sortBy={{ curSort: "sum", sum: "desc" }}
            loadData={loadData}
          />
          <BarChart
            data={monthsIncome}
            chartClassName="panel__chart"
            wrapperClassName="panel__chart-wrapper"
            title="Доход"
          />
        </>
      ),
      content: (
        <BarChart
          data={monthsIncome}
          chartClassName="panel__chart"
          wrapperClassName="panel__chart-wrapper"
          title="Доход"
        />
      ),
      value: `${addSpaceDelimiter(
        Math.floor(curMonthIncome * 100) / 100
      )} руб.`,
      prevValue: `${addSpaceDelimiter(
        Math.floor(prevMonthIncome * 100) / 100
      )} руб.`,
      difference: curMonthIncome - prevMonthIncome,
      percentage:
        Math.floor(
          ((curMonthIncome - prevMonthIncome) /
            (prevMonthIncome === 0 ? 1 : prevMonthIncome)) *
            100 *
            100
        ) / 100,
    }));
  };

  //При первой загрузке
  useEffect(() => {
    console.log("first render");
    !stats.isLoaded && requests.length > 1 && getStats(requests);
  }, [requests]);

  //При обновлении тек. даты
  useEffect(() => {
    if (stats.isLoaded && requests.length > 1) {
      setStats((stats) => ({
        ...stats,
        timePeriod: timeText,
        curPeriod: curPeriod,
      }));
      getStats(requests);
    }
  }, [currDate]);

  return <BigPanel {...stats} />;
};

export default IncomeStatsBigPanel;