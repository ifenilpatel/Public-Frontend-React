import React from "react";
import Register from "./components/Register";
import ChangePassword from "./components/ChangePassword";
import ForgotPassword from "./components/ForgotPassword";
import SignIn from "./components/SignIn";

const authRoutes = [
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
    element: <SignIn />,
  },
];

export default authRoutes;
