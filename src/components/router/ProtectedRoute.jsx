import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

function ProtectedRoute({ children }) {
  
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  return !accessToken ? children  : <Navigate to="/" replace />;
}

export default ProtectedRoute;
