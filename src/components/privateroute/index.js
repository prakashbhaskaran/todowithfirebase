import { Navigate } from "react-router-dom";
const PrivateRoute = ({ children }) => {
  const isAuthenticated = true;

  if (isAuthenticated) {
    return children;
  }

  return <Navigate to="/login" />;
};

export default PrivateRoute;
