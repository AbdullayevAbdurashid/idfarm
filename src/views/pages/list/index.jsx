import React, { useMemo, useEffect, useState } from "react";
import { Container } from "reactstrap";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";
import { cowData } from "../../tables/data-tables/data";
function List() {
  return (
    <Container fluid>
      <DataTableWithButtons cowData={cowData} />
    </Container>
  );
}
export default List;
