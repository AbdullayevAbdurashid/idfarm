// ** Third Party Components
import Chart from "react-apexcharts";

// ** Reactstrap Imports
import { Card, CardHeader, CardTitle, CardBody } from "reactstrap";

const ApexRadiarChart = () => {
  const donutColors = {
    series1: "#ffe700",
    series3: "#826bf8",
  };

  // ** Chart Options
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      parentHeightOffset: 0,
      dropShadow: {
        enabled: false,
        blur: 8,
        left: 1,
        top: 1,
        opacity: 0.2,
      },
    },
    legend: {
      show: true,
      position: "bottom",
    },
    yaxis: {
      show: false,
    },
    colors: [donutColors.series1, donutColors.series3],
    xaxis: {
      categories: [
        "Yem",
        "Dorilar",
        "Emlanish",
        "Parvarish",
        "Kontsentratlar",
        "Shirali ozuqa",
        "Veterinar xizmati",
      ],
    },
    fill: {
      opacity: [1, 0.8],
    },
    stroke: {
      show: false,
      width: 0,
    },
    markers: {
      size: 0,
    },
    grid: {
      show: false,
      padding: {
        top: -20,
        bottom: -20,
      },
    },
  };

  // ** Chart Series
  const series = [
    {
      name: "Navvos",
      data: [60, 64, 20, 60, 42, 63, 30],
    },
    {
      name: "Sigir",
      data: [65, 46, 20, 40, 58, 63, 30],
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle tag="h4">Bitta hayvon uchun rasxodlar</CardTitle>
      </CardHeader>
      <CardBody>
        <Chart options={options} series={series} type="radar" height={400} />
      </CardBody>
    </Card>
  );
};

export default ApexRadiarChart;
