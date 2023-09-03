import { styled } from "styled-components";
import CheckBox from "../common/CheckBox";

const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: grid;
  padding: 0 2rem;
  align-items: center;
  grid-template-columns: 40px minmax(50%, 1fr) repeat(2, minmax(20%, 100px));
  & > p:not(:first-child, :nth-child(2)) {
    text-align: center;
  }
`;

const CartRow = () => {
  return (
    <Wrapper>
      <CheckBox />
      <p>نام محصول تاباس</p>
      <p>3 تا</p>
      <p>۴۰۰۰۰ تومان</p>
    </Wrapper>
  );
};

export default CartRow;
