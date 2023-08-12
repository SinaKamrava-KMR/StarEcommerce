import { motion } from "framer-motion";
import { styled } from "styled-components";
import PropTypes from "prop-types";

ProductTableRow.propTypes = {
  delay: PropTypes.number,
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

const Image = styled("img")({
  width: "60px",
  height: "50px",
  objectFit: "fit",
  "border-radius": "4px",
  margin: "0 auto",
});

function ProductTableRow({ delay }) {
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
      <p>۱</p>
      <Image src="/public/slider/fit.jpg" />
      <p>col 3</p>
      <p>col 4</p>
      <p>col 5</p>
      <p>col 6</p>
    </TableRowStyle>
  );
}

export default ProductTableRow;
