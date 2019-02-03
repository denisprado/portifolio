import Components from "views/Components/Components.jsx";
import WorkPage from "views/WorkPage/WorkPage.jsx";

var indexRoutes = [
  { path: "/work", name: "WorkPage", component: WorkPage },
  { path: "/", name: "Components", component: Components }
];

export default indexRoutes;
