import React, { useMemo, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { cowData } from "../../tables/data-tables/data";
import { columns } from "./data";
function List() {
  return (
    <Container fluid>
      <DataTableWithButtons columns={columns} cowData={cowData} />
      <Row>
        <Col></Col>
        <Col>
          <Card></Card>
        </Col>
      </Row>
    </Container>
  );
}
export default List;
