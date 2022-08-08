import React from "react";
import { Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <Spinner className="my-5" animation="border" variant="danger" />;
  }
  return user.displayName ? children : <Navigate to="/login" />;
};

export default PrivateRoute;