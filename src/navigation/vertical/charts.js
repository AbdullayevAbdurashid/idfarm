// ** Icons Import
import { MessageSquare, Circle, List } from "react-feather";
import { GiSheep } from "react-icons/gi";
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
];
