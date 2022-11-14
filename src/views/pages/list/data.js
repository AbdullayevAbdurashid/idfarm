// ** Custom Components
// ** Third Party Components
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

export const data = [
  {
    id: "BR 001",
    gender: "navvos",
    race: "Golland",
    date: "12/10/2013",
    age: 16,
    weightInitial: 10,
    weight: 740,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 002",
    gender: "navvos",
    race: "Mahalliy",
    date: "12/10/2011",
    age: 16,
    weightInitial: 13,
    weight: 430,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 003",
    gender: "navvos",
    race: "Golland",
    date: "12/10/2019",
    age: 3,
    weightInitial: 116,
    weight: 690,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 004",
    gender: "navvos",
    race: "Mahalliy",
    date: "12/10/2016",
    age: 4,
    weightInitial: 18,
    weight: 780,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 005",
    gender: "navvos",
    race: "Golland",
    date: "12/10/2016",
    age: 6,
    weightInitial: 18,
    weight: 1400,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 006",
    gender: "sigir",
    race: "Mahalliy",
    date: "12/10/2016",
    age: 6,
    weightInitial: 13,
    weight: 900,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },

  {
    id: "BR 007",
    gender: "sigir",
    race: "Lebedin",
    date: "12/10/2016",
    age: 6,
    weightInitial: 9,
    weight: 400,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 008",
    gender: "sigir",
    race: "Golland",
    date: "12/10/2017",
    age: 5,
    weightInitial: 20,
    weight: 200,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 009",
    gender: "sigir",
    race: "Lebedin",
    date: "12/10/2017",
    age: 5,
    weightInitial: 20,
    weight: 100,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 010",
    gender: "navvos",
    race: "Golland",
    date: "12/10/2018",
    age: 5,
    weightInitial: 20,
    weight: 400,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
  {
    id: "BR 011",
    gender: "sigir",
    race: "Shvits",
    date: "12/10/2019",
    age: 5,
    weightInitial: 20,
    weight: 400,
    parent: {
      father: "BR 002",
      mather: "BR 003",
    },
  },
];
