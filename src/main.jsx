import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routing
import authRoutes from "./module/authentication/authRoutes.jsx";
import backofficeRoutes from "./module/backoffice/backofficeRoutes.jsx";

const routing = createBrowserRouter([
  ...authRoutes,
  {
    path: "/backoffice",
    children: backofficeRoutes,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>
);
