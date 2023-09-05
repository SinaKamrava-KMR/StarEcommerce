import { styled } from "styled-components";
import PropTypes from "prop-types";
import { convertToP, convertToPersianNumber } from "../../../utils/helper";
import { useProductById } from "../../../hooks/useProductById";
OrderModalRow.propTypes = {
  product: PropTypes.object,
  row: PropTypes.number,
};
const TableRowStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2rem repeat(3, minmax(112px, 1fr));
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
function OrderModalRow({ product, row }) {
 
  const { isFetching, product: good } = useProductById(product.product);
  if (isFetching) return <p>در حال دریافت اطلاعات</p>;
  
  if (!good) return <p> محصول وجود ندارد</p>;
  return (
    <TableRowStyle>
      <p>{convertToP(row)}</p>
      <p>{good?.data?.product.name}</p>
      <p>{convertToPersianNumber(good?.data?.product.price)} تومان</p>
      <p>{convertToP(product.count)}</p>
    </TableRowStyle>
  );
}

export default OrderModalRow;
