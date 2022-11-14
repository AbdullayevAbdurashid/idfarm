import { MoreVertical, Edit, FileText, Archive, Trash } from "react-feather";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "Mahsulot turi",
    minWidth: "150px",
    sortable: (row) => row.type,
    selector: (row) => row.type,
  },
  {
    name: "Mahsulot nomi",
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
