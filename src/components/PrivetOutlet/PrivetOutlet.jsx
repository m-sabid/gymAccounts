import React from "react";
import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";

const PrivetOutlet = () => {
  const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/m/auth" />;
};

export default PrivetOutlet;
