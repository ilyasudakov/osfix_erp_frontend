import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './StatisticsPage.scss'

import { getRequests } from '../../../utils/RequestsAPI/Requests.jsx'
import {
  addSpaceDelimiter,
  formatDateString,
} from '../../../utils/functions.jsx'
import { createGraph, loadCanvas } from '../../../utils/graphs.js'

import ClientsIcon from '../../../../../../../assets/sidemenu/client.inline.svg'
import MoneyIcon from '../../../../../../../assets/etc/bx-ruble.inline.svg'
import ListIcon from '../../../../../../../assets/sidemenu/list.inline.svg'

const StatisticsPage = () => {
  const [requests, setRequests] = useState([])
  const [requestsLoaded, setRequestsLoaded] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loadRequests = (signal) => {
    if (!requestsLoaded && !isLoading) {
      setIsLoading(true)
      getRequests(signal)
        .then((res) => res.json())
        .then((res) => {
          setRequestsLoaded(true)
          setRequests([...res])
          setIsLoading(false)
        })
        .catch((error) => {
          setIsLoading(false)
          setRequestsLoaded(true)
          console.log(error)
        })
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    loadRequests(abortController.signal)
  }, [])

  return (
    <div className="statistics">
      <div className="main-window">
        <div className="main-window__title">Статистика</div>
        <div className="statistics__row">
          <RequestsQuantityPanel requests={requests} />
          <IncomeStatsPanel requests={requests} />
          <AverageSumStatsPanel requests={requests} />
        </div>
        <div className="statistics__row">
          <TestGraphPanel data={requests} />
          {/* <TestGraphPanel data={requests} /> */}
        </div>
      </div>
    </div>
  )
}

export default StatisticsPage

const RequestsQuantityPanel = (props) => {
  const [stats, setStats] = useState({
    category: 'Заявки',
    percentage: 0,
    value: null,
    linkTo: '/requests',
    isLoaded: false,
    timePeriod: 'От прошлого месяца',
    difference: 0,
    renderIcon: () => (
      <ClientsIcon className="panel__img panel__img--requests" />
    ),
  })

  const getRequestQuantityStats = (requests) => {
    let curMonthQuantity = 0
    let prevMonthQuantity = 0

    //check prev month
    let temp = requests.filter((request) => {
      const date = new Date(request.date)
      if (date.getMonth() === new Date(new Date().setDate(0)).getMonth()) {
        prevMonthQuantity++
        return false
      }
      return true
    })
    temp.map((request) => {
      const date = new Date(request.date)
      if (date.getMonth() === new Date().getMonth()) {
        curMonthQuantity++
      }
    })

    setStats((stats) => ({
      ...stats,
      isLoaded: true,
      value: curMonthQuantity,
      difference: curMonthQuantity - prevMonthQuantity,
      percentage:
        Math.floor(
          ((curMonthQuantity - prevMonthQuantity) / prevMonthQuantity) *
            100 *
            100,
        ) / 100,
    }))
  }

  useEffect(() => {
    !stats.isLoaded &&
      props.requests.length > 1 &&
      getRequestQuantityStats(props.requests)
  }, [props.requests, stats])

  return <SmallPanel {...stats} />
}

const IncomeStatsPanel = (props) => {
  const [stats, setStats] = useState({
    category: 'Доход',
    percentage: 0,
    value: null,
    linkTo: '/requests',
    isLoaded: false,
    timePeriod: 'От прошлого месяца',
    difference: 0,
    renderIcon: () => <MoneyIcon className="panel__img panel__img--money" />,
  })

  const getStats = (requests) => {
    let curMonthIncome = 0
    let prevMonthIncome = 0

    //check prev month
    let temp = requests.filter((request) => {
      const date = new Date(request.date)
      if (
        date.getMonth() === new Date(new Date().setDate(0)).getMonth() &&
        request.status === 'Завершено'
      ) {
        prevMonthIncome += Number.parseFloat(request.sum || 0)
        return false
      }
      if (request.status !== 'Завершено') {
        return false
      }
      return true
    })
    temp.map((request) => {
      const date = new Date(request.date)
      if (
        date.getMonth() === new Date().getMonth() &&
        request.status === 'Завершено'
      ) {
        curMonthIncome += Number.parseFloat(request.sum || 0)
      }
    })

    setStats((stats) => ({
      ...stats,
      isLoaded: true,
      value: `${addSpaceDelimiter(curMonthIncome)} руб.`,
      difference: curMonthIncome - prevMonthIncome,
      percentage:
        Math.floor(
          ((curMonthIncome - prevMonthIncome) /
            (prevMonthIncome === 0 ? 1 : prevMonthIncome)) *
            100 *
            100,
        ) / 100,
    }))
  }

  useEffect(() => {
    !stats.isLoaded && props.requests.length > 1 && getStats(props.requests)
  }, [props.requests, stats])

  return <SmallPanel {...stats} />
}

const AverageSumStatsPanel = (props) => {
  const [stats, setStats] = useState({
    category: 'Средняя сумма заказа',
    percentage: 0,
    value: null,
    linkTo: '/requests',
    isLoaded: false,
    timePeriod: 'От прошлого месяца',
    difference: 0,
    renderIcon: () => <MoneyIcon className="panel__img panel__img--money" />,
  })

  const getStats = (requests) => {
    let curMonthAverage = 0
    let prevMonthAverage = 0
    let prevMonthLength = 0
    let curMonthLength = 0

    //check prev month
    let temp = requests.filter((request) => {
      const date = new Date(request.date)
      if (
        date.getMonth() === new Date(new Date().setDate(0)).getMonth() &&
        request.status === 'Завершено'
      ) {
        prevMonthLength++
        prevMonthAverage += Number.parseFloat(request.sum || 0)
        return false
      }
      if (request.status !== 'Завершено') {
        return false
      }
      return true
    })

    temp.map((request) => {
      const date = new Date(request.date)
      if (
        date.getMonth() === new Date().getMonth() &&
        request.status === 'Завершено'
      ) {
        curMonthLength++
        curMonthAverage += Number.parseFloat(request.sum || 0)
      }
    })

    curMonthAverage = curMonthAverage / curMonthLength
    prevMonthAverage = prevMonthAverage / prevMonthLength

    setStats((stats) => ({
      ...stats,
      isLoaded: true,
      value: `${addSpaceDelimiter(
        Math.floor(curMonthAverage * 100) / 100,
      )} руб.`,
      difference: curMonthAverage - prevMonthAverage,
      percentage:
        Math.floor(
          ((curMonthAverage - prevMonthAverage) /
            (prevMonthAverage === 0 ? 1 : prevMonthAverage)) *
            100 *
            100,
        ) / 100,
    }))
  }

  useEffect(() => {
    !stats.isLoaded && props.requests.length > 1 && getStats(props.requests)
  }, [props.requests, stats])

  return <SmallPanel {...stats} />
}

const SmallPanel = (props) => {
  return (
    <Link
      className={`panel ${props.isLoaded ? '' : 'panel--placeholder'}`}
      to={props.linkTo || '/'}
    >
      <div className="panel__category">
        <span>{props.category || 'Категория'}</span>
        {props.renderIcon ? (
          <div className="panel__icon">{props.renderIcon()}</div>
        ) : null}
      </div>
      <div
        className={`panel__value panel__value--${
          props.difference < 0 ? 'negative' : 'positive'
        }`}
        data-diff={
          props.isLoaded
            ? `${props.difference < 0 ? '' : '+'}${
                Math.floor(props.difference * 100) / 100
              }`
            : ''
        }
      >
        {props.value || ''}
      </div>
      <div
        className={`panel__difference panel__difference--${
          props.percentage === 0 || !props.isLoaded
            ? 'equal'
            : props.percentage < 0
            ? 'negative'
            : 'positive'
        }`}
      >
        <div className="panel__arrow"></div>
        <div className="panel__percentage">
          {props.isLoaded ? `${Math.abs(props.percentage)}%` : ''}
        </div>
        <div className="panel__time-period">
          {props.isLoaded ? props.timePeriod : ''}
        </div>
      </div>
      <div
        className={`panel__difference panel__difference--${
          props.percentage === 0 || !props.isLoaded
            ? 'equal'
            : props.percentage < 0
            ? 'negative'
            : 'positive'
        }`}
      ></div>
    </Link>
  )
}

const TestGraphPanel = (props) => {
  const [graph, setGraph] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const [stats, setStats] = useState({
    category: 'Заказы',
    isLoaded: false,
    chartName: 'income-graph',
    renderIcon: () => <ListIcon className="panel__img panel__img--list" />,
  })

  const getStats = (data) => {
    let curMonthData = []
    let prevMonthData = []
    const date = new Date()
    let dates = []
    for (
      let i = 1;
      i <= new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
      i++
    ) {
      dates.push(i)
    }
    dates.map((item) => {
      const curDate = new Date(date.getFullYear(), date.getMonth(), item)
      const prevDate = new Date(date.getFullYear(), date.getMonth() - 1, item)
      let curSum = 0
      let prevSum = 0
      data.map((request) => {
        if (formatDateString(request.date) === formatDateString(curDate)) {
          //   curMonthData.push()
          return curSum++
        }
        if (formatDateString(request.date) === formatDateString(prevDate)) {
          //   curMonthData.push()
          return prevSum++
        }
      })
      curMonthData.push(curSum)
      prevMonthData.push(prevSum)
    })
    console.log(curMonthData, prevMonthData)
    let dataset = {
      labels: dates,
      datasets: [
        {
          data: prevMonthData,
          label: 'Пред. месяц',
          borderColor: '#3e95cd',
          fill: false,
        },
        {
          data: curMonthData,
          label: 'Тек. месяц',
          borderColor: '#8e5ea2',
          fill: false,
        },
      ],
    }
    renderGraph(dataset)
  }

  const renderGraph = (dataset) => {
    if (!canvasLoaded) {
      setStats((stats) => ({
        ...stats,
        isLoaded: true,
      }))
      loadCanvas(`panel__chart-wrapper--${stats.chartName}`, 'panel__chart')
    }

    setCanvasLoaded(true)
    const options = {
      type: 'line',
      data: dataset,
      options: {
        cornerRadius: 2.5,
        fullCornerRadius: false,
        responsive: true,
        maintainAspectRatio:
          (window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth) > 500
            ? true
            : false,
        animation: {
          easing: 'easeInOutCirc',
        },
        legend: {
          position: 'top',
          labels: {
            usePointStyle: true,
          },
        },
        tooltips: {
          mode: 'index',
        },

        scales: {
          yAxes: [
            {
              // display: false,
              gridLines: {
                display: false,
              },
              ticks: {
                // display: false,
              },
            },
          ],
          xAxes: [
            {
              // display: false,
              gridLines: {
                display: false,
              },
              ticks: {
                // display: false,
              },
            },
          ],
        },
      },
    }
    setTimeout(() => {
      setIsLoading(false)
      canvasLoaded && graph.destroy()
      setGraph(createGraph(options))
    }, 150)
  }

  useEffect(() => {
    !stats.isLoaded && props.data.length > 1 && getStats(props.data)
  }, [props.data, stats])

  return <GraphPanel {...stats} />
}

const GraphPanel = (props) => {
  return (
    <div
      className={`panel panel--chart ${
        props.isLoaded ? '' : 'panel--placeholder'
      }`}
    >
      <div className="panel__category">
        <span>{props.category || 'Категория'}</span>
        {props.renderIcon ? (
          <div className="panel__icon">{props.renderIcon()}</div>
        ) : null}
      </div>
      <div
        className={`panel__chart-wrapper panel__chart-wrapper--${props.chartName}`}
      ></div>
    </div>
  )
}
