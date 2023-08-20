import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import StateButton from "../../common/StateButton";
import PropTypes from "prop-types";

AddProductFooter.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
  inModal: PropTypes.bool,
  text: PropTypes.string,
};

const Wrapper = styled(Box)(({ modal }) => ({
  backgroundColor: "#fff",
  position: modal ? "absolute" : "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  height: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1rem",
  zIndex: 100,
  padding: "2rem",
  paddingLeft: "3rem",
  borderRadius: ".5rem",
}));

function AddProductFooter({ onSubmit, onCancel, inModal = false, text = "" }) {
  return (
    <Wrapper modal={inModal}>
      <StateButton variant="cancel" onClick={onCancel}>
        انصراف
      </StateButton>
      <StateButton variant="add" onClick={onSubmit}>
        {text}
      </StateButton>
    </Wrapper>
  );
}

export default AddProductFooter;
