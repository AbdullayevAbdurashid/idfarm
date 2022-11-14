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
    id: "roles-permissions",
    title: "Boshqaruv bo'limi",
    icon: <User size={20} />,
    children: [
      {
        id: "tasks",
        title: "Vazifalar nazorati",
        icon: <Circle size={12} />,
        navLink: "/apps/kanban",
      },
      {
        id: "roles",
        title: "Xodimlar ro'yxati",
        icon: <Circle size={12} />,
        navLink: "/apps/roles",
      },

      {
        id: "permissions",
        title: "Dasturga kirish ruxsati",
        icon: <Circle size={12} />,
        navLink: "/apps/permissions",
      },
    ],
  },
  {
    id: "chat",
    title: "Ichki chat",
    icon: <MessageSquare size={20} />,
    navLink: "/apps/chat",
  },

  {
    id: "calendar",
    title: "Kalendar",
    icon: <Calendar size={20} />,
    navLink: "/apps/calendar",
  },
];
