import PropTypes from "prop-types";
import { styled } from "styled-components";
import CheckBox from "../common/CheckBox";
import DeleteProductButton from "./DeleteProductButton";

const Wrapper = styled.div`
  padding: 1rem;
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

`;
const Hero = styled.div`
  display: flex;
  align-items: center;
  position: sticky;

  padding: 0 2rem;
  font-weight: bold;
  & p:first-child{
    font-size: 2rem;
  }
`;
const TableHeader = styled.div`
  position: sticky;
  width: 100%;
  min-height: 80px;
  display: grid;
  align-items: center;
  background-color: #f2f2f29a;
  border-radius: 1rem;
  padding: 0 2rem;
  font-weight: bold;
  grid-template-columns: 40px minmax(50%, 1fr) repeat(2, minmax(20%, 100px));

  & > p:not(:first-child, :nth-child(2)) {
    text-align: center;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: auto;
  max-height: 400px;
  
  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #d1d1d19a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #616264;
    border-radius: 10px;
  }
`;

const CartTable = ({ children,onCheckAll,isActive,onRemove }) => {
  return (
    <Wrapper>
      <Hero>
        <p>سبد خرید</p>
        <span style={{ flex: 1 }}></span>
        <DeleteProductButton active={ isActive} onClick={onRemove} />
      </Hero>
      <TableHeader>
        <CheckBox onCheck={onCheckAll} />
        <p>محصولات</p>
        <p>تعداد</p>
        <p>قیمت</p>
      </TableHeader>
      <Container>{children}</Container>
    </Wrapper>
  );
};

CartTable.propTypes = {
  children: PropTypes.node,
  onRemove: PropTypes.func,
  wishList: PropTypes.array,
  onCheckAll: PropTypes.func,
  isActive: PropTypes.bool,
};
export default CartTable;
