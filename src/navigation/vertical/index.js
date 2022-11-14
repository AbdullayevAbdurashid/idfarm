// ** Navigation imports
import apps from "./apps";
import pages from "./pages";
import tables from "./tables";
import charts from "./charts";
import dashboards from "./dashboards";
import uiElements from "./ui-elements";

// ** Merge & Export
export default [
  ...dashboards,
  ...charts,
  ...apps,
  ...pages,
  ...uiElements,
  ...tables,
];
