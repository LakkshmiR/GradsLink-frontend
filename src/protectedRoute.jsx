import React from "react";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children }) => {
  const isLoggedin = localStorage.getItem("token");
  if (!isLoggedin) {
    return <Navigate to="/login" />;
  } else {
    return children;
  }
};
export default ProtectedRoute;
