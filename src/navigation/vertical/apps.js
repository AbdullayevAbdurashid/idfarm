// ** Icons Import
import { Mail, MessageSquare, CheckSquare, Calendar, FileText, Circle, ShoppingCart, User, Shield } from 'react-feather'

export default [
  {
    header: 'Apps & Pages'
  },
  {
    id: 'chat',
    title: 'Xabarlar',
    icon: <MessageSquare size={20} />,
    navLink: '/apps/chat'
  },

  {
    id: 'calendar',
    title: 'Kalendar',
    icon: <Calendar size={20} />,
    navLink: '/apps/calendar'
  },
  {
    id: 'invoice',
    title: 'Sotuvlar',
    icon: <FileText size={20} />,
    navLink: '/apps/invoice/list'


  },

  {
    id: 'roles-permissions',
    title: 'Ruxsat va xafsizlik',
    icon: <Shield size={20} />,
    children: [
      {
        id: 'roles',
        title: 'Vazifalar',
        icon: <Circle size={12} />,
        navLink: '/apps/roles'
      },
      {
        id: 'permissions',
        title: 'Ruxsatlar',
        icon: <Circle size={12} />,
        navLink: '/apps/permissions'
      }
    ]
  },
 
  {
    id: 'users',
    title: 'Foydalanuvchilar',
    icon: <User size={20} />,
    navLink: '/apps/user/list'
  }
]
