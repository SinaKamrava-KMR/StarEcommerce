import Cookies from "js-cookie";
import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

function PrivateRoute({ children }) {
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  console.log(accessToken);
  return accessToken ?  children  : <Navigate to="/auth/user" replace />;
}

export default PrivateRoute;
