import Dashboard from "./components/Dashboard";
import Department from "./components/Department";
import Designation from "./components/Designation";
import Users from "./components/Users";
import Reports from "./components/Reports";
import Master from "./layout/Master";
import ProtectedRoute from "../../shared/ProtectedRoute";
import { Navigate } from "react-router-dom";

const backofficeRoutes = [
  {
    path: "",
    element: <Master />,
    children: [
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "department",
        element: (
          <ProtectedRoute>
            <Department />
          </ProtectedRoute>
        ),
      },
      {
        path: "designation",
        element: (
          <ProtectedRoute>
            <Designation />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "reports",
        element: (
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        ),
      },
      {
        path: "",
        element: <Navigate to="dashboard" />,
      },
    ],
  },
];

export default backofficeRoutes;
