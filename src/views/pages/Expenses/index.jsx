import React, { useContext } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { columns, data, expensesData } from "./data";
import Breadcrumbs from "@components/breadcrumbs";

import ApexRadarChart from "../../charts/apex/ApexRadarChart";
import ApexBarChart from "../../charts/apex/ApexBarChart";
import "@styles/react/libs/charts/apex-charts.scss";
import SimpleLineChart from "@src/views/charts/recharts/LineChart.js";
import "@styles/react/libs/charts/recharts.scss";
function List() {
  return (
    <Container fluid>
      <Breadcrumbs
        title="Xarajatlar"
        data={[{ title: "Moliya" }, { title: "Xarajatlar" }]}
      />
      <DataTableWithButtons columns={columns} cowData={data} noSearch />
      <Row>
        <Col md={6}>
          <ApexBarChart></ApexBarChart>
        </Col>
        <Col md={6}>
          <ApexRadarChart></ApexRadarChart>
        </Col>
        <Col md={12}>
          <SimpleLineChart title={"Xarajat turi"} data={expensesData} />
        </Col>
      </Row>
    </Container>
  );
}
export default List;
