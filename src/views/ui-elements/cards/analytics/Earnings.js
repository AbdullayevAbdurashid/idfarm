// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import { Card, CardTitle, CardText, CardBody, Row, Col } from "reactstrap";

const Earnings = ({ success }) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: { show: false },
    comparedResult: [2, -3, 8],
    labels: ["Sut", "Gushtlar", "Sotuvlar"],
    stroke: { width: 0 },
    colors: ["#28c76f66", "#28c76f33", success],
    grid: {
      padding: {
        right: -20,
        bottom: -8,
        left: -20,
      },
    },
    plotOptions: {
      pie: {
        startAngle: -10,
        donut: {
          labels: {
            show: true,
            name: {
              offsetY: 15,
            },
            value: {
              offsetY: -15,
              formatter(val) {
                return `${parseInt(val)} %`;
              },
            },
            total: {
              show: true,
              offsetY: 15,
              label: "Umumiy",
              formatter() {
                return "53%";
              },
            },
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1325,
        options: {
          chart: {
            height: 100,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 120,
          },
        },
      },
      {
        breakpoint: 1065,
        options: {
          chart: {
            height: 100,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 120,
          },
        },
      },
    ],
  };

  return (
    <Card className="earnings-card">
      <CardBody>
        <Row>
          <Col xs="6">
            <CardTitle className="mb-1">Foyda</CardTitle>
            <div className="font-small-2">Bu oy</div>
            <h5 className="mb-1">4055 mln so'm</h5>
            <CardText className="text-muted font-small-2">
              <span>O'tgan oydan </span>
              <span className="fw-bolder">68.2% ko'proq</span>
            </CardText>
          </Col>
          <Col xs="6">
            <Chart
              options={options}
              series={[53, 16, 31]}
              type="donut"
              height={120}
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default Earnings;
