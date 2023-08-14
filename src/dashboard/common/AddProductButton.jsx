import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import { styled } from "styled-components";
import Modal from "../../components/common/Modal";
import AddProductModal from "../components/addProduct/AddProductModal";

const ButtonStyled = styled.button`
  background-color: #1cc56b;
  color: #f0f0f0;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  border-radius: 4px;
  outline: 0;
  border: 0;
  gap: 1rem;
  padding: 0.7rem 1rem;
  &:hover {
    background-color: #1aac52;
  }
  &:focus {
    outline: 0;
    border: 0;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
  }
`;

function AddProductButton() {
  const [showModal, setShowModal] = useState(false);

  if (showModal)
    return (
      <Modal>
        <AddProductModal oncloseModal={() => setShowModal(false)} />
      </Modal>
    );

  return (
    <ButtonStyled onClick={() => setShowModal(true)}>
      <p> اضافه کردن محصول</p>
      <AddIcon fontSize="large" />
    </ButtonStyled>
  );
}

export default AddProductButton;
