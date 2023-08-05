import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import PropTypes from "prop-types";

AddProductButton.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.node,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
const ButtonLayout = styled(Box)(({ active }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: active ? 0 : "1px dashed #969696",
  borderRadius: ".3rem",
  paddingBlock: ".8rem",
  gap: ".5rem",
  zIndex: 10,
  cursor: "pointer",
  color: active ? "#fff" : "#171824fb",
  backgroundColor: active ? "transparent" : "#c3c3c31f",
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
const Text = styled("p")({
  fontSize: "14px",
});
function AddProductButton({ label, icon, active, onClick }) {
  return (
    <ButtonLayout onClick={onClick} active={active}>
      <Text>{label}</Text>
      {icon}
    </ButtonLayout>
  );
}

export default AddProductButton;
