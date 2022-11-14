import { MoreVertical, Edit, FileText, Archive, Trash } from "react-feather";
import { Link } from "react-router-dom";
// ** Reactstrap Imports
export const expensesData = [
  {
    name: "Январь",
    pv: 200,
    pd: 300,
  },
  {
    name: "Феврал",
    pv: 100,
    pd: 300,
  },
  {
    name: "Март",
    pv: 200,
    pd: 100,
  },
  {
    name: "Апрель",
    pv: 50,
    pd: 100,
  },
  {
    name: "Май",
    pv: 23,
    pd: 100,
  },
  {
    name: "Июнь",
    pv: 13,
    pd: 100,
  },
  {
    name: "Июль",
    pv: 57,
    pd: 100,
  },
  {
    name: "Август",
    pv: 62,
    pd: 140,
  },
  {
    name: "Сеньтябрь",
    pv: 68,
    pd: 190,
  },
  {
    name: "Октябрь",
    pv: 30,
    pd: 50,
  },
  {
    name: "Ноябрь",
    pv: 34,
    pd: 50,
  },
  {
    name: "Декабрь",
    pv: 10,
    pd: 60,
  },
];
export const columns = [
  {
    name: "Xarajat turi",
    minWidth: "150px",
    sortable: (row) => row.type,
    selector: (row) => row.type,
  },
  {
    name: "Xarajat nomi",
    minWidth: "150px",
    sortable: (row) => row.name,
    selector: (row) => row.name,
  },
  {
    name: "O'lchov birligi",
    minWidth: "150px",
    sortable: (row) => row.measure,
    selector: (row) => row.measure,
  },
  {
    name: "Miqdori",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.qnt,
  },

  {
    name: "Narxi",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.price,
  },
  {
    name: "Summasi",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.summ,
  },
  {
    name: "Sanasi",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.date,
  },
];
export const data = [
  {
    type: "Yem",
    name: "Bug'doy",
    measure: "Tonna",
    qnt: "10",
    price: "100, 000 mln",
    summ: "100,00,000 mln",
    date: "20/11/2022",
  },
];
