import { motion } from "framer-motion";
import { styled } from "styled-components";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import ChangeInput from "../../dashboard/components/productsManagement/ChangeInput";
import PropTypes from "prop-types";
import AddProductModal from "../../dashboard/components/addProduct/AddProductModal";
import Modal from "./Modal";
import { useCategoryById } from "../../hooks/useCategoryById";
import { useState } from "react";
import DeleteModal from "../../dashboard/common/DeleteModal";
import { convertToPersianNumber } from "../../utils/helper";


TableRow.propTypes = {
  delay: PropTypes.number,
  product: PropTypes.object,
  row: PropTypes.number,
  dispatch: PropTypes.func,
  onDelete: PropTypes.func,
  state: PropTypes.object,
};
const TableRowStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2rem repeat(5, minmax(112px, 1fr));
  grid-auto-flow: column;
  column-gap: 2rem;
  align-items: center;
  text-align: center;
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 950px) {
    text-align: start;
  }
`;
const BtnWrapper = styled.div`
  width: 37px;
  height: 37px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: white;
  border-radius: 0.5rem;
  background-color: ${(props) => props.color};
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
`;

function TableRow({ delay, product, row, state, dispatch, onDelete }) {
  const inputValues = state.inputs.find((item) => item?.id === product?._id);


  const [isDeleting, setIsDeleting] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const { category } = useCategoryById(product.category);


  function handleChangePrice(value) {
    dispatch({
      type: "price/chnaged",
      payload: { id: product?._id, price: value },
    });
  }
  function handleChangeQuentity(value) {
    dispatch({
      type: "quentity/chnaged",
      payload: { id: product?._id, quantity: value },
    });
  }
  function handleClosePrice() {
    dispatch({ type: "price/removed", payload: { id: product?._id } });
  }
  function handleCloseQuentity() {
    dispatch({ type: "quentity/removed", payload: { id: product?._id } });
  }

  return (
    <TableRowStyle
      as={motion.div}
      transition={{
        delay: `${delay <= 9 ? `.${delay}` : 1}`,
        duration: 0.4,
      }}
      initial={{ y: 500 }}
      animate={{ y: 0 }}
    >
      {showEditModal && (
        <Modal>
          <AddProductModal
            product={product}
            oncloseModal={() => setShowEditModal(false)}
          />
        </Modal>
      )}
      {isDeleting && (
        <DeleteModal
          label={product.name}
          onCancel={() => setIsDeleting(false)}
          onDelete={() => {
            onDelete(product?._id);
            setIsDeleting(false);
          }}
        />
      )}
      <p>{convertToPersianNumber(row)}</p>
      <p>{product.name}</p>
      <p>{category?.name}</p>
      <ChangeInput
        defaultValue={product.price}
        onChange={handleChangePrice}
        isSaved={!state.isSaved && state.inputs.length == 0}
        value={inputValues?.price}
        onClose={handleClosePrice}
      />
      <ChangeInput
        defaultValue={product.quantity}
        isSaved={!state.isSaved && state.inputs.length == 0}
        value={inputValues?.quantity}
        onChange={handleChangeQuentity}
        onClose={handleCloseQuentity}
      />

      <ButtonGroup>
        <BtnWrapper onClick={() => setIsDeleting(true)} color="#ff6969">
          <HiTrash />
        </BtnWrapper>
        <BtnWrapper
          onClick={() => {
            setShowEditModal(true);
          }}
          color="#69b4ff"
        >
          <HiPencilSquare />
        </BtnWrapper>
      </ButtonGroup>
    </TableRowStyle>
  );
}

export default TableRow;
