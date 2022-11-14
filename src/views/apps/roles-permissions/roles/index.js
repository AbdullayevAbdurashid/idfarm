// ** React Imports
import { Fragment } from "react";

// ** Roles Components
import Table from "./Table";
import RoleCards from "./RoleCards";

const Roles = () => {
  return (
    <Fragment>
      <h3>Xodimlar ro'yxat</h3>
      <p className="mb-2">
        A role provides access to predefined menus and features depending on the
        assigned role to an administrator that can have access to what he needs.
      </p>
      <RoleCards />
      <h3 className="mt-50">Ferma ishchilari ro'yhati</h3>
      <p className="mb-2">Fermadagi ishchilarni ro'yhati</p>
      <div className="app-user-list">
        <Table />
      </div>
    </Fragment>
  );
};

export default Roles;
