// ** Dropdowns Imports
import IntlDropdown from './IntlDropdown'
import CartDropdown from './CartDropdown'
import UserDropdown from './UserDropdown'
import NavbarSearch from './NavbarSearch'
import NotificationDropdown from './NotificationDropdown'
import { getUserData  } from '../../../../utility/Utils'
// ** Third Party Components
import { Sun, Moon } from 'react-feather'
import { Link } from 'react-router-dom'
// ** Reactstrap Imports
import { NavItem, NavLink } from 'reactstrap'

const NavbarUser = props => {
  // ** Props
  const { skin, setSkin } = props
  const user = getUserData()

  // ** Function to toggle Theme (Light/Dark)
  const ThemeToggler = () => {
    if (skin === 'dark') {
      return <Sun className='ficon' onClick={() => setSkin('light')} />
    } else {
      return <Moon className='ficon' onClick={() => setSkin('dark')} />
    }
  }

  return (
    <ul className='nav navbar-nav align-items-center ms-auto'>
      {user ? <>  <IntlDropdown />
      <NavItem className='d-none d-lg-block'>
        <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
      </NavItem>


      <NotificationDropdown />
      <UserDropdown /></> : <>
      <NavLink className='nav-link-style'>
          <ThemeToggler />
        </NavLink>
        <NavLink className='nav-link-style'>
          <Link to={"/login"} > Login</Link>
        </NavLink>
        </>}
 
    </ul>
  )
}
export default NavbarUser
