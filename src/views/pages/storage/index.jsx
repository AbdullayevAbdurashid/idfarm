import React, { useContext } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { columns, data, expensesData } from "./data";
import Breadcrumbs from "@components/breadcrumbs";

import "chart.js/auto";
import ChartjsBarChart from "../../charts/chart-js/ChartjsBarChart";

import "@styles/react/libs/charts/recharts.scss";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

function List() {
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    successColorShade = "#28dac6";

  return (
    <Container fluid>
      <Breadcrumbs title="Ombor" data={[{ title: "Ombor" }]} />
      <DataTableWithButtons columns={columns} cowData={data} noSearch />
      <Row>
        <Col md={12}>
          <ChartjsBarChart
            success={successColorShade}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
          />
        </Col>
      </Row>
    </Container>
  );
}
export default List;
