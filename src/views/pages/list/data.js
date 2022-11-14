export const columns = [
  {
    name: "ID raqami",
    minWidth: "150px",
    sortable: (row) => row.id,
    selector: (row) => row.date,
  },
  {
    name: "Emlanganlik sanasi",
    minWidth: "150px",
    sortable: (row) => row.date,
    selector: (row) => row.date,
  },
  {
    name: "Emlash turi",
    minWidth: "150px",
    sortable: (row) => row.type,
    selector: (row) => row.type,
  },
  {
    name: "Keyingi emlash sanasi",
    minWidth: "150px",
    sortable: (row) => row.nextDate,
    selector: (row) => row.nextDate,
  },
];
export const data = [
  {
    id: "BR 001",
    date: "12/10/2014",
    type: "Pfizer",
  },
];
export const IllnessColumns = [
  {
    name: "ID raqami",
    minWidth: "150px",
    sortable: (row) => row.id,
    selector: (row) => row.date,
  },
  {
    name: "Kaslllik  sanasi",
    minWidth: "150px",
    sortable: (row) => row.date,
    selector: (row) => row.date,
  },
  {
    name: "Kaslllik turi",
    minWidth: "150px",
    sortable: (row) => row.type,
    selector: (row) => row.type,
  },
  {
    name: "Kaslllik sababi",
    minWidth: "150px",
    sortable: (row) => row.reason,
    selector: (row) => row.reason,
  },
];
export const IllnessData = [
  {
    id: "BR 001",
    date: "12/10/2014",
    type: "Grip",
    reason: "Sovuq",
    nextDate: "12/11/2022",
  },
];
