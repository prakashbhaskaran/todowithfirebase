import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { SessionContext } from "../../store/SessionProvider";
const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(SessionContext);

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default PrivateRoute;
