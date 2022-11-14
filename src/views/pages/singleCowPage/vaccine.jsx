import React, { useMemo, useEffect, useState } from "react";
import DataTableWithButtons from "@src/views/tables/data-tables/basic/TableWithButtons.js";
import "@styles/react/libs/tables/react-dataTable-component.scss";

// ** React Imports
import { Fragment } from "react";
import { columns, data, IllnessColumns, IllnessData } from "./data";

import "@styles/react/libs/flatpickr/flatpickr.scss";

const VaccineInfo = ({ isIllness }) => {
  // ** States
  return (
    <Fragment>
      {isIllness ? (
        <DataTableWithButtons
          noSearch={true}
          columns={IllnessColumns}
          cowData={IllnessData}
        />
      ) : (
        <DataTableWithButtons
          noSearch={true}
          columns={columns}
          cowData={data}
        />
      )}
    </Fragment>
  );
};

export default VaccineInfo;
