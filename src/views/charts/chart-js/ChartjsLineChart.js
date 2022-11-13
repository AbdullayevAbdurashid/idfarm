// ** Third Party Components
import { Line } from 'react-chartjs-2'

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, CardSubtitle } from 'reactstrap'

const ChartjsLineChart = ({ labelColor, gridLineColor, warningColorShade, lineChartDanger, lineChartPrimary }) => {
  // ** Chart Options
  const options = {
    responsive: true,
    backgroundColor: false,
    maintainAspectRatio: false,
    scales: {
      x: {
        ticks: { color: labelColor },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      },
      y: {
        min: 2218,
        max: 19096,
        scaleLabel: { display: true },
        ticks: {
          stepSize: 100,
          color: labelColor
        },
        grid: {
          borderColor: gridLineColor,
          color: gridLineColor
        }
      }
    },
    plugins: {
      legend: {
        align: 'start',
        position: 'top',
        labels: {
          boxWidth: 10,
          marginBottom: 25,
          color: labelColor,
          usePointStyle: true
        }
      }
    }
  }

  // ** Chart Data
  const data = {
    labels: [1992, 1998, 2003, 2008, 2016, 2017, 2017, 2022],
    datasets: [
      {
        data: [5275, 5225, 5879, 8026,  11637, 12181, 13381, 14381],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Yirik shoxliklar',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartDanger,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartDanger,
        pointHoverBackgroundColor: lineChartDanger
      },
      {
        data: [2218, 2290, 2557, 3327, 4173, 4217, 4917, 5917],
        fill: false,
        tension: 0.5,
        label: 'Shuningdak mollar',
        pointRadius: 1,
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: lineChartPrimary,
        pointBorderColor: 'transparent',
        backgroundColor: lineChartPrimary,
        pointHoverBackgroundColor: lineChartPrimary
      },
      {
        data: [10329, 8697, 9929, 13523, 19096, 19698, 19998, 19998,],
        fill: false,
        tension: 0.5,
        pointRadius: 1,
        label: 'Echki va qoylar',
        pointHoverRadius: 5,
        pointStyle: 'circle',
        pointHoverBorderWidth: 5,
        borderColor: warningColorShade,
        backgroundColor: warningColorShade,
        pointBorderColor: warningColorShade,
        pointHoverBackgroundColor: warningColorShade
      }
    ]
  }

  //** To add spacing between legends and chart
  const plugins = [
    {
      beforeInit(chart) {
        chart.legend.afterFit = function () {
          this.height += 20
        }
      }
    }
  ]

  return (
    <Card>
      <CardHeader className='d-flex justify-content-between align-items-sm-center align-items-start flex-sm-row flex-column'>
        <div>
          <CardTitle className='mb-75' tag='h4'>
            Statistics
          </CardTitle>
          <CardSubtitle>Commercial networks and enterprises</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ height: '450px' }}>
          <Line data={data} options={options} height={450} plugins={plugins} />
        </div>
      </CardBody>
    </Card>
  )
}

export default ChartjsLineChart
