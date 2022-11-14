import React, { useMemo, useEffect, useState } from "react";
import { Container } from "reactstrap";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { columns, data } from "./data";
function Expenses() {
  return (
    <Container fluid>
      <DataTableWithButtons columns={columns} cowData={data} />
    </Container>
  );
}
export default Expenses;
