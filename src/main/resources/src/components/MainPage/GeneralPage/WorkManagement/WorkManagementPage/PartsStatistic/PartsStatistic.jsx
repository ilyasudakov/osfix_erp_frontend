import React, { useEffect, useState } from 'react'
import './PartsStatistic.scss'
import { createGraph, loadCanvas } from '../../../../../../utils/graphs.js'
import { getRandomColor } from '../../../../../../utils/functions.jsx'
import chevronDownSVG from '../../../../../../../../../../assets/tableview/chevron-down.svg'

const PartsStatistic = (props) => {
  const [graph, setGraph] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [canvasLoaded, setCanvasLoaded] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const originalColor = '#00a3a2'

  const options = {
    type: 'horizontalBar',
    data: {
      // barPercentage: 0.5,
      // barThickness: 6,
      // maxBarThickness: 8,
      // minBarLength: 2,
      labels: [...Object.entries(props.data).map((product) => product[1].name)],
      datasets: [
        {
          label: 'Количество ед. продукции',
          backgroundColor: [
            ...Object.entries(props.data).map(
              (product, index) =>
                '#' + (index % 10) + (index % 10) + 'a3a' + (index % 10),
            ),
          ],
          data: [
            ...Object.entries(props.data).map((product) => product[1].quantity),
          ],
        },
      ],
    },
    options: {
      // maintainAspectRation: false,
      responsive: true,
      animation: {
        easing: 'easeInOutCirc',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
            scaleLabel: {
              display: true,
              labelString: 'Название',
              fontStyle: 'italic',
            },
            // barPercentage: 0.2,
            barThickness: 'flex',
            // minBarLength: 10
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'Количество',
              fontStyle: 'italic',
            },
            // padding: 10
            // barThickness: 10,
          },
        ],
      },
    },
  }

  useEffect(() => {
    console.log([
      ...Object.entries(props.data).map(
        (product, index) => '#00' + (index % 10) + '3a2',
      ),
    ])
    if (Object.entries(props.data).length > 0) {
      if (!canvasLoaded) {
        loadCanvas('main-window__chart-wrapper', 'main-window__chart')
        setCanvasLoaded(true)
      }
      setTimeout(() => {
        setIsLoading(false)
        canvasLoaded && graph.destroy()
        setGraph(createGraph(options))
      }, 150)
    }
  }, [props.data])
  return (
    <div className="parts-statistic">
      <div
        className="main-window__title"
        onClick={() => {
          return setIsVisible(!isVisible)
        }}
      >
        Отчет по произведенной продукции
        <img
          className={
            isVisible
              ? 'main-window__img'
              : 'main-window__img main-window__img--rotated'
          }
          src={chevronDownSVG}
        />
      </div>
      <div
        className={
          isVisible
            ? 'parts-statistic__wrapper'
            : 'parts-statistic__wrapper parts-statistic__wrapper--hidden'
        }
      >
        <div className="main-window__chart-wrapper"></div>
        <div className="main-window__list">
          <div className="main-window__list-item main-window__list-item--header">
            <span>Название</span>
            <span>Количество</span>
          </div>
          {Object.entries(props.data).map((part) => {
            return (
              <div className="main-window__list-item">
                <span>
                  <div className="main-window__mobile-text">Название:</div>
                  {part[1].name}
                </span>
                <span>
                  <div className="main-window__mobile-text">Количество:</div>
                  {part[1].quantity}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PartsStatistic
