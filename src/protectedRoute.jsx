import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedin = localStorage.getItem("token");
  const location = useLocation();
  if (!isLoggedin) {
    return <Navigate to="/login" />;
  } else {
    // return children;
    return React.cloneElement(children, { locationKey: location.key });
  }
};
export default ProtectedRoute;
