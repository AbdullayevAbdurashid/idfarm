// ** Icons Import
import {
  MessageSquare,
  Circle,
  List,
  DollarSign,
  PlusCircle,
} from "react-feather";
import { GiSheep, GiPayMoney } from "react-icons/gi";

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
    title: "Chorva royhati",
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
        title: "Soruv royhati",
        icon: <List />,
        navLink: "/apps/invoice/list",
      },

      {
        id: "invoiceAdd",
        title: "Yangi qoshish",
        icon: <PlusCircle />,
        navLink: "/apps/invoice/add",
      },

      {
        id: "expenses",
        title: "Xarajatlar",
        icon: <GiPayMoney />,
        navLink: "/pages/expenses",
      },
    ],
  },
];
