import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

function PrivateRoute({ children }) {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  return accessToken ?  children  : <Navigate to="/auth" replace />;
}

export default PrivateRoute;
