import PropTypes from "prop-types";
import Modal from "../../components/common/Modal";
import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Typography } from "@material-ui/core";
import { motion } from "framer-motion";

DeleteModal.propTypes = {
  onDelete: PropTypes.func,
  onCancel: PropTypes.func,
  label: PropTypes.string,
  id: PropTypes.string,
};

const Container = styled(Box)`
  padding: 1.5rem;
  width: 30%;
  gap: 5rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  z-index: 8000;
`;
const ButtonGroup = styled(Box)`
  display: flex;
  gap: 2rem;
  width: 100%;
  justify-content: flex-end;
`;

const Label = styled("span")`
  color: #ff5757;
  margin-inline: 5px;
`;
const DeleteBtn = styled("p")`
  background-color: #fb5050;
  color: #f3f2f2;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;
const CancelBtn = styled("p")`
  background-color: #eaeaea;
  color: #242424;
  border-radius: 0.4rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
`;

function DeleteModal({ onDelete, onCancel, label }) {
  return (
    <Modal>
      <Container
        component={motion.div}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <Typography variant="content">
          ایا از حذف محصول <Label>{label}</Label> اطمینان دارید؟
        </Typography>

        <ButtonGroup>
          <CancelBtn onClick={onCancel}>انصراف</CancelBtn>
          <DeleteBtn onClick={onDelete}>حذف محصول</DeleteBtn>
        </ButtonGroup>
      </Container>
    </Modal>
  );
}

export default DeleteModal;
