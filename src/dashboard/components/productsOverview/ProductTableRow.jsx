import { motion } from "framer-motion";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { useCategoryById } from "../../../hooks/useCategoryById";
ProductTableRow.propTypes = {
  delay: PropTypes.number,
  product: PropTypes.object,
  row: PropTypes.number,
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

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
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

const Image = styled("img")({
  width: "60px",
  height: "50px",
  objectFit: "fit",
  "border-radius": "4px",
  margin: "0 auto",
});

function ProductTableRow({ delay, product, row }) {
  const { category } = useCategoryById(product.category);

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
      <p>{row}</p>
      <Image
        src={`http://localhost:8000/images/products/images/${product.images[0]}`}
      />
      <p>{product.name}</p>
      <p>{category?.name}</p>
      <p>{product?.quantity}</p>
      <ButtonGroup>
        <BtnWrapper color="#ff6969">
          <HiTrash />
        </BtnWrapper>
        <BtnWrapper color="#69b4ff">
          <HiPencilSquare />
        </BtnWrapper>
      </ButtonGroup>
    </TableRowStyle>
  );
}

export default ProductTableRow;
