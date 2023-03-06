// Route protection

import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";

function RequireAuth({ children }) {
  const { user } = useContext(UserContext);
  const location = useLocation();
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireAuth;
