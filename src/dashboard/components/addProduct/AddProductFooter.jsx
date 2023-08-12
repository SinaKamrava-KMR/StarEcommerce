import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import StateButton from "../../common/StateButton";
import PropTypes from "prop-types";

AddProductFooter.propTypes = {
  onSubmit: PropTypes.func,
  onCancel: PropTypes.func,
};

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  position: "fixed",
  left: 0,
  right: 0,
  bottom: 0,
  height: "70px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: "1rem",
  zIndex: 100,
  padding: "2rem",
  paddingLeft: "3rem",
});

function AddProductFooter({ onSubmit, onCancel }) {
  return (
    <Wrapper>
      <StateButton variant="cancel" onClick={onCancel}>
        انصراف
      </StateButton>
      <StateButton variant="add" onClick={onSubmit}>
        اضافه کردن
      </StateButton>
    </Wrapper>
  );
}

export default AddProductFooter;
