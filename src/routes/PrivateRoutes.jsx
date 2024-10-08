import { AuthContext } from "../Firebase/Provider/AuthProvider";
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user } = useContext(AuthContext);
  const location = useLocation(); // Use location to capture the current URL

  if (user) {
    return children; // If the user is authenticated, render the children components
  }

  // Pass the current location as the redirect path when navigating to login
  return (
    <Navigate to="/login" replace state={{ redirectPath: location.pathname }} />
  );
};

export default PrivateRoutes;
