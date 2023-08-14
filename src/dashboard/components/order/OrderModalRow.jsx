import { styled } from "styled-components";

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
function OrderModalRow() {
  return (
    <TableRowStyle>
      <p>۱</p>
      <p>کفش ادیداس</p>
      <p>۲۰۰۰۰</p>
      <p>۲</p>
    </TableRowStyle>
  );
}

export default OrderModalRow;
