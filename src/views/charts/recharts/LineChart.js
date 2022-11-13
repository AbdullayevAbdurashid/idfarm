// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody, Badge } from "reactstrap";

// ** Third Party Components
import { ArrowDown, ArrowUp } from "react-feather";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ** Chart Data
const datadef = [
  {
    name: "7/12",
    pv: 280,
  },
  {
    name: "8/12",
    pv: 200,
  },
  {
    name: "9/12",
    pv: 220,
  },
  {
    name: "10/12",
    pv: 180,
  },
  {
    name: "11/12",
    pv: 270,
  },
  {
    name: "12/12",
    pv: 250,
  },
  {
    name: "13/12",
    pv: 70,
  },
  {
    name: "14/12",
    pv: 90,
  },
  {
    name: "15/12",
    pv: 200,
  },
  {
    name: "16/12",
    pv: 150,
  },
  {
    name: "17/12",
    pv: 160,
  },
  {
    name: "18/12",
    pv: 100,
  },
  {
    name: "19/12",
    pv: 150,
  },
  {
    name: "20/12",
    pv: 100,
  },
  {
    name: "21/12",
    pv: 50,
  },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload) {
    return (
      <div className="recharts-custom-tooltip">
        <span>{`${payload[0].value} bosh`}</span>
      </div>
    );
  }

  return null;
};

const SimpleLineChart = ({ warning, descr, title, data, isLegend }) => {
  return (
    <Card>
      <CardHeader>
        <div>
          <CardTitle tag="h4">{title}</CardTitle>
          <small className="text-muted">{descr}</small>
        </div>
        {isLegend ? (
          <div className="d-flex align-items-center flex-wrap mt-sm-0 mt-1">
            <Badge className="badge-md mb-0 me-1" color="light-secondary">
              <ArrowDown className="text-danger me-50" size={15} />
              Olimlar
            </Badge>
            <Badge className="badge-md" color="light-secondary">
              <ArrowUp className="text-success me-50" size={15} />
              Tugulishlar
            </Badge>
          </div>
        ) : null}
      </CardHeader>

      <CardBody>
        <div className="recharts-wrapper">
          <ResponsiveContainer>
            <LineChart height={300} data={data || datadef}>
              <CartesianGrid />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={CustomTooltip} />
              <Line dataKey="pv" stroke={warning} strokeWidth={3} />
              <Line dataKey="pd" stroke={"red"} strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
};
export default SimpleLineChart;
