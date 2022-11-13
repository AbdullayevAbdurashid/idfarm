// ** Custom Components
import Avatar from "@components/avatar";
import { Router } from "react-router-dom";
// ** Third Party Components
import axios from "axios";
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

const status = {
  1: { title: "Current", color: "light-primary" },
  2: { title: "Professional", color: "light-success" },
  3: { title: "Rejected", color: "light-danger" },
  4: { title: "Resigned", color: "light-warning" },
  5: { title: "Applied", color: "light-info" },
};

export let data;
// ** Get initial Data
axios.get("/api/datatables/initial-data").then((response) => {
  data = response.data;
});
axios.get("/api/datatables/cow-data").then((response) => {
  cowData = response.data;
});
export let cowData;

// ** Table Zero Config Column
export const basicColumns = [
  {
    name: "ID",
    sortable: true,
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.full_name,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "310px",
    selector: (row) => row.email,
  },
  {
    name: "Position",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.post,
  },
  {
    name: "Age",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.age,
  },
  {
    name: "Salary",
    sortable: true,
    minWidth: "175px",
    selector: (row) => row.salary,
  },
];
// ** Table ReOrder Column
export const reOrderColumns = [
  {
    name: "ID",
    reorder: true,
    sortable: true,
    maxWidth: "100px",
    selector: (row) => row.id,
  },
  {
    name: "Name",
    reorder: true,
    sortable: true,
    minWidth: "225px",
    selector: (row) => row.full_name,
  },
  {
    name: "Email",
    reorder: true,
    sortable: true,
    minWidth: "310px",
    selector: (row) => row.email,
  },
  {
    name: "Position",
    reorder: true,
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.post,
  },
  {
    name: "Age",
    reorder: true,
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.age,
  },
  {
    name: "Salary",
    reorder: true,
    sortable: true,
    minWidth: "175px",
    selector: (row) => row.salary,
  },
];

// ** Expandable table component
const ExpandableTable = ({ data }) => {
  return (
    <div className="expandable-content p-2">
      <p>
        <span className="fw-bold">City:</span> {data.city}
      </p>
      <p>
        <span className="fw-bold">Experience:</span> {data.experience}
      </p>
      <p className="m-0">
        <span className="fw-bold">Post:</span> {data.post}
      </p>
    </div>
  );
};

// ** Table Common Column
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

// ** Table Intl Column
export const multiLingColumns = [
  {
    name: "Name",
    sortable: true,
    minWidth: "200px",
    selector: (row) => row.full_name,
  },
  {
    name: "Position",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.post,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.email,
  },
  {
    name: "Date",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.start_date,
  },

  {
    name: "Salary",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.salary,
  },
  {
    name: "Status",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.status,
    cell: (row) => {
      return (
        <Badge color={status[row.status].color} pill>
          {status[row.status].title}
        </Badge>
      );
    },
  },
  {
    name: "Actions",
    allowOverflow: true,
    cell: () => {
      return (
        <div className="d-flex">
          <UncontrolledDropdown>
            <DropdownToggle className="pe-1" tag="span">
              <MoreVertical size={15} />
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <FileText size={15} />
                <span className="align-middle ms-50">Details</span>
              </DropdownItem>
              <DropdownItem>
                <Archive size={15} />
                <span className="align-middle ms-50">Archive</span>
              </DropdownItem>
              <DropdownItem>
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

// ** Table Server Side Column
export const serverSideColumns = [
  {
    sortable: true,
    name: "Full Name",
    minWidth: "225px",
    selector: (row) => row.full_name,
  },
  {
    sortable: true,
    name: "Email",
    minWidth: "250px",
    selector: (row) => row.email,
  },
  {
    sortable: true,
    name: "Position",
    minWidth: "250px",
    selector: (row) => row.post,
  },
  {
    sortable: true,
    name: "Office",
    minWidth: "150px",
    selector: (row) => row.city,
  },
  {
    sortable: true,
    name: "Start Date",
    minWidth: "150px",
    selector: (row) => row.start_date,
  },
  {
    sortable: true,
    name: "Salary",
    minWidth: "150px",
    selector: (row) => row.salary,
  },
];

// ** Table Adv Search Column
export const advSearchColumns = [
  {
    name: "Name",
    sortable: true,
    minWidth: "200px",
    selector: (row) => row.full_name,
  },
  {
    name: "Email",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.email,
  },
  {
    name: "Post",
    sortable: true,
    minWidth: "250px",
    selector: (row) => row.post,
  },
  {
    name: "City",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.city,
  },
  {
    name: "Date",
    sortable: true,
    minWidth: "150px",
    selector: (row) => row.start_date,
  },

  {
    name: "Salary",
    sortable: true,
    minWidth: "100px",
    selector: (row) => row.salary,
  },
];

export default ExpandableTable;
