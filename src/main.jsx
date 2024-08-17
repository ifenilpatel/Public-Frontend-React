import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Routing
import authRoutes from "./module/authentication/authRoutes.jsx";
import backofficeRoutes from "./module/backoffice/backofficeRoutes.jsx";
import PageNotFound from "./shared/components/PageNotFound.jsx";

const routing = createBrowserRouter([
  {
    path: "/",
    children: authRoutes,
  },
  {
    path: "/backoffice",
    children: backofficeRoutes,
  },
  {
    path: "/backoffice",
    children: backofficeRoutes,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routing} />
  </React.StrictMode>
);
