import { AuthContext } from "../Firebase/Provider/AuthProvider";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user) {
    return children; // If the user is authenticated, render the children components
  }

  return <Navigate to="/login" replace />; // Redirect to the login page if user is not authenticated
};

export default PrivateRoutes;
