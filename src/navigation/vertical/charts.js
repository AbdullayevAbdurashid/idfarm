// ** Icons Import
import { List, DollarSign, PlusCircle } from "react-feather";
import { GiSheep, GiPayMoney, GiBarn } from "react-icons/gi";

export default [
  {
    header: "Ferma",
  },
  {
    id: "chat",
    title: "Chorva",
    icon: <GiSheep size={20} />,
    navLink: "/pages/heard",
  },
  {
    id: "chat",
    title: "Chorva ro'yhati",
    icon: <List size={20} />,
    navLink: "/pages/royhat",
  },
  {
    id: "invoiceApp",
    title: "Moliya",
    icon: <DollarSign />,
    children: [
      {
        id: "invoiceList",
        title: "Mijozlar ro'yhati",
        icon: <List />,
        navLink: "/apps/invoice/list",
      },

      {
        id: "expenses",
        title: "Xarajatlar",
        icon: <GiPayMoney />,
        navLink: "/pages/expenses",
      },
    ],
  },
  {
    id: "storage",
    title: "Ombor",
    icon: <GiBarn size={20} />,
    navLink: "/pages/storage",
  },
];
