// ** Reactstrap Imports
import { Nav, NavItem, NavLink } from "reactstrap";
import { FaSyringe, FaVirus } from "react-icons/fa";
// ** Icons Imports
import { Bell, Info } from "react-feather";

const Tabs = ({ activeTab, toggleTab }) => {
  return (
    <Nav pills className="mb-2">
      <NavItem>
        <NavLink active={activeTab === "1"} onClick={() => toggleTab("1")}>
          <Info size={18} className="me-50" />
          <span className="fw-bold">Malumot</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === "2"} onClick={() => toggleTab("2")}>
          <FaSyringe size={18} className="me-50" />
          <span className="fw-bold">Emlash jadvali</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink active={activeTab === "3"} onClick={() => toggleTab("3")}>
          <FaVirus size={18} className="me-50" />
          <span className="fw-bold">Kasallik royhati</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default Tabs;
