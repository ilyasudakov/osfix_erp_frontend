import React, { useState, useEffect } from 'react'
import GraphPanel from './GraphPanel.jsx'
import EmployeeIcon from '../../../../../../../../assets/sidemenu/employee.inline.svg'
import { months } from '../../../../utils/dataObjects'
import { createGraph, loadCanvas } from '../../../../utils/graphs.js'
import { formatDateStringNoDate } from '../../../../utils/functions.jsx'

const ManagerEfficiencyGraphPanel = ({ data, curDate }) => {
  const [graph, setGraph] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const [stats, setStats] = useState({
    category: 'Статистика по менеджерам (заказы)',
    isLoaded: false,
    chartName: 'manager-efficiency-graph',
    timePeriod: `${months[curDate.getMonth()]}`,
    renderIcon: () => (
      <EmployeeIcon className="panel__img panel__img--employee" />
    ),
  })

  const getStats = (data, curDate = new Date()) => {
    let managers = {}
    data.map((request) => {
      if (
        formatDateStringNoDate(request.date) === formatDateStringNoDate(curDate)
      ) {
        managers = {
          ...managers,
          [request.responsible]:
            managers[request.responsible] !== undefined
              ? managers[request.responsible] + 1
              : 1,
        }
      }
    })
    // console.log(managers)
    renderGraph(managers)
  }

  const renderGraph = (dataset) => {
    if (!canvasLoaded) {
      setStats((stats) => ({
        ...stats,
        isLoaded: true,
      }))
      loadCanvas(
        `panel__chart-wrapper--${stats.chartName}`,
        `panel__chart panel__chart--${stats.chartName}`,
      )
    }

    setCanvasLoaded(true)
    const options = {
      type: 'pie',
      data: {
        labels: Object.entries(dataset).map((item) => item[0]),
        datasets: [
          {
            // label: 'Population (millions)',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850',
              '#bbbbbb',
              '#bbbbbb',
              '#bbbbbb',
            ],
            data: Object.entries(dataset).map((item) => item[1]),
          },
        ],
      },
      options: {
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
        tooltips: {
          mode: 'index',
        },
      },
    }
    setTimeout(() => {
      setIsLoading(false)
      canvasLoaded && graph.destroy()
      setGraph(
        createGraph(
          options,
          document.getElementsByClassName(
            `panel__chart--${stats.chartName}`,
          )[0],
        ),
      )
    }, 150)
  }

  //При первом рендере
  useEffect(() => {
    !stats.isLoaded && data.length > 1 && getStats(data)
  }, [data, stats])

  //При обновлении тек. даты
  useEffect(() => {
    if (!stats.isLoading && data.length > 1) {
      setCanvasLoaded(false)
      setStats((stats) => ({
        ...stats,
        timePeriod: `${months[curDate.getMonth()]}`,
      }))
      graph.destroy()
      getStats(data, curDate)
    }
  }, [curDate])

  return <GraphPanel {...stats} />
}

export default ManagerEfficiencyGraphPanel
