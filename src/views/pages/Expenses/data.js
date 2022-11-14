import { MoreVertical, Edit, FileText, Archive, Trash } from "react-feather";
import { Link } from "react-router-dom";
// ** Reactstrap Imports
import {
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
export const columns = [
  {
    name: "ID raqami",
    minWidth: "150px",
    sortable: (row) => row.id,
    cell: (row) => {
      return <Link to={`/cows/${row.id.replace(/\s/g, "")}`}> {row.id}</Link>;
    },
  },
  {
    name: "Jinsi",
    minWidth: "150px",
    sortable: (row) => row.gender,
    selector: (row) => row.gender,
  },
  {
    name: "Zoti",
    minWidth: "150px",
    sortable: (row) => row.race,
    selector: (row) => row.race,
  },
  {
    name: "Tugilgan sanasi",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.date,
  },
  {
    name: "Yoshi",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.age,
  },
  {
    name: "Tugulgandagi ogirligi",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.weightInitial,
  },
  {
    name: "Ogirligi",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.weight,
  },

  {
    name: "Actions",
    allowOverflow: true,
    cell: (row) => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem
                tag="a"
                href={"/cows/" + row.id.replace(/\s/g, "")}
                className="w-100"
              >
                <FileText size={15} />
                <span className="align-middle ms-50">Malumot</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Archive size={15} />
                <span className="align-middle ms-50">Archive</span>
              </DropdownItem>
              <DropdownItem
                tag="a"
                href="/"
                className="w-100"
                onClick={(e) => e.preventDefault()}
              >
                <Trash size={15} />
                <span className="align-middle ms-50">Delete</span>
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
          <Edit size={15} />
        </div>
      );
    },
  },
];
