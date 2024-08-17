import React, { Children } from "react";
import Register from "./components/Register";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";
import { Navigate } from "react-router-dom";
import Master from "./layout/Master";

const authRoutes = [
  {
    path: "",
    element: <Master />,
    children: [
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/change-password",
        element: <ChangePassword />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "/",
        element: <Navigate to="signin" />,
      },
    ],
  },
];

export default authRoutes;
