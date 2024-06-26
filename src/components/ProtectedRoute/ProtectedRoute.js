import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth.js";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default ProtectedRoute;
