import { styled } from "styled-components";
import PropTypes from "prop-types";
import { convertToP, convertToPersianNumber } from "../../../utils/helper";
import useProduct from "../../../hooks/useProduct";
OrderModalRow.propTypes = {
  product: PropTypes.object,
  row: PropTypes.number,
};

const Name = styled.div`
 
  text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
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
 
  const { isLoading,products  } = useProduct(1, 10000);
  
  if(isLoading) return <p>در حال دریافت اطلاعات</p>
    const good = products.data.products.find(item => item._id === product.product);

  
  if(!good) return false

  return (
    <TableRowStyle>
      <p>{convertToP(row)}</p>
      <Name>{good?.name}</Name>
      <p>{convertToPersianNumber(good?.price)} تومان</p>
      <p>{convertToP(product.count)}</p>
    </TableRowStyle>
  );
}

export default OrderModalRow;
