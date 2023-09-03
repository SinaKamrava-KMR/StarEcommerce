import { styled } from "styled-components";
import CheckBox from "../common/CheckBox";
import PropTypes from "prop-types";
import { convertToPersianNumber } from "../../utils/helper";

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

const CartRow = ({ product, onCheck, initCheck }) => {
  return (
    <Wrapper>
      <CheckBox
        initCheck={initCheck}
        onCheck={(state) => onCheck(state, product._id)}
      />
      <p>{product.name} </p>
      <p> {convertToPersianNumber(product.productCount)}</p>
      <p>
        {convertToPersianNumber(product.productCount * product.price)} تومان
      </p>
    </Wrapper>
  );
};

CartRow.propTypes = {
  product: PropTypes.object,
  onCheck: PropTypes.func,
  initCheck: PropTypes.bool,
};
export default CartRow;
