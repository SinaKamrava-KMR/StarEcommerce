import Cookies from "js-cookie";

import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

ProtectedDashboard.propTypes = {
  children: PropTypes.node,
};
function ProtectedDashboard({ children }) {
  const userRole = useSelector((state) => state.user.role);
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  console.log(userRole);
  return accessToken && userRole === "ADMIN" ? (
    children
  ) : (
    <Navigate to="/auth" replace />
  );
}

export default ProtectedDashboard;
