import styled from "@emotion/styled";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

NavItem.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  label: PropTypes.string,
  active: PropTypes.bool,
};

const Label = styled("p")({
  whiteSpace: "nowrap",
});
const Item = styled(Box, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "active",
})(({ active }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: "1rem",
  padding: "1rem",
  cursor: "pointer",
  overflow: "hidden",
  zIndex: 10,
  transition:"color .3s ease-in",
  // backgroundColor: active ? "#06041cd0" : "transparent",
  color: active ? "#fff" : "#06041cd0",
  borderRadius: ".5rem",
  "&:hover": {
    backgroundColor: active ? "transparent" : "#d9d9d948",
  },
  "@media (max-width:950px)": {
    justifyContent: "center",
    paddingInline: "1.3rem",
    "& > p": {
      display: "none",
    },
  },
}));

function NavItem({ onClick = () => {}, icon, label, active = false }) {
  return (
    <Item onClick={onClick} active={active}>
      {icon}
      <Label>{label}</Label>
    </Item>
  );
}

export default NavItem;
