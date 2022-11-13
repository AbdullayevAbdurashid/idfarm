// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from 'reactstrap'

// ** Third Party Components
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'

const SimplePieChart = props => {
  // ** Chart Data
  const data = [
    { name: 'Buqalar', value: 50, color: props.series2 },
    { name: 'Sigirlar', value: 85, color: props.series1 },
   
  ]
  /*eslint-disable */
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, fill }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    /*eslint-enable */
    return (
      <text
        x={x}
        y={y}
        fill={fill === props.secondary ? '#000' : '#fff'}
        textAnchor='middle'
        dominantBaseline='central'
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle tag='h4'>Chorva kategoriyalari</CardTitle>
        </div>
      </CardHeader>
      <CardBody>
        <div className='recharts-wrapper'>
          <ResponsiveContainer>
            <PieChart height={350}>
              <Pie data={data} innerRadius={80} dataKey='value' label={renderCustomizedLabel} labelLine={false}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} label />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className='d-flex align-items-center justify-content-center flex-wrap'>
          <div className='me-2'>
            <span className='bullet bullet-sm bullet-bordered me-50' style={{ backgroundColor: props.series2  }}></span>
            <span className='me-75'>Buqalar</span>
          </div>
          <div className='me-2'>
            <span className='bullet bullet-sm bullet-bordered me-50' style={{ backgroundColor: props.series1}}></span>
            <span className='me-75'>Sigirlar</span>
          </div>
        
        </div>
      </CardBody>
    </Card>
  )
}
export default SimplePieChart
