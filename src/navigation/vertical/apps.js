// ** Icons Import
import {
  Mail,
  MessageSquare,
  CheckSquare,
  Calendar,
  FileText,
  Circle,
  ShoppingCart,
  User,
  Shield,
} from "react-feather";

export default [
  {
    header: "Dastur",
  },
  {
    id: "chat",
    title: "Xabarlar",
    icon: <MessageSquare size={20} />,
    navLink: "/apps/chat",
  },

  {
    id: "calendar",
    title: "Kalendar",
    icon: <Calendar size={20} />,
    navLink: "/apps/calendar",
  },
  {
    id: "roles-permissions",
    title: "Xodimlar",
    icon: <User size={20} />,
    children: [
      {
        id: "roles",
        title: "Royxat",
        icon: <Circle size={12} />,
        navLink: "/apps/roles",
      },
      {
        id: "tasks",
        title: "Vazifalar",
        icon: <Circle size={12} />,
        navLink: "/apps/kanban",
      },
      {
        id: "permissions",
        title: "Ruxsatlar",
        icon: <Circle size={12} />,
        navLink: "/apps/permissions",
      },
    ],
  },
];
