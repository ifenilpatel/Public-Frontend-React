import Dashboard from "./components/Dashboard";
import Department from "./components/Department";
import Designation from "./components/Designation";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Master from "./layout/Master";

const backofficeRoutes = [
  {
    path: "",
    element: <Master />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "department",
        element: <Department />,
      },
      {
        path: "designation",
        element: <Designation />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },
];

export default backofficeRoutes;
