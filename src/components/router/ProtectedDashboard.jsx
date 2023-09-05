import Cookies from "js-cookie";

import { ACCESS_TOKEN_KEY } from "../../configs/constants";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { show } from "../../redux/reducer/toast/toastSlice";

ProtectedDashboard.propTypes = {
  children: PropTypes.node,
};
function ProtectedDashboard({ children }) {
  const userRole = useSelector((state) => state.user.role);
  const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
  const dispatch = useDispatch();

  console.log(userRole);
  console.log(accessToken);
  if (userRole === "USER") {
    dispatch(
      show({
        message: " فقط ادمین اجازه دسترسی به داشبور را دارد",
        status: "error",
      })
    );
  }
  // && userRole === "ADMIN"
  return accessToken && userRole === "ADMIN" ? (
    children
  ) : (
    <Navigate to="/auth/admin" replace />
  );
}

export default ProtectedDashboard;
