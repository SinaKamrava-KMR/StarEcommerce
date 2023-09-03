import PropTypes from "prop-types";
import { styled } from "styled-components";
import { TbPlus, TbMinus } from "react-icons/tb";
import { convertToPersianNumber } from "../../utils/helper";
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
const Btn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;

  cursor: ${(props) => (props.active ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.active ? "#dcdcdc" : "#ededed")};
  opacity: ${(props) => (props.active ? ".4" : "1")};
  &:hover {
    background-color: #cecece;
  }
  border-radius: 0.4rem;
`;

const CartCounter = ({ init, setCount, total }) => {
  return (
    <Wrapper>
      <Btn
        active={init === total}
        onClick={() => setCount(init === total ? init : init + 1)}
      >
        <TbPlus />
      </Btn>
      <p>{convertToPersianNumber(init)}</p>
      <Btn
        active={init == 1}
        onClick={() => setCount(init == 1 ? init : init - 1)}
      >
        <TbMinus />
      </Btn>
    </Wrapper>
  );
};
CartCounter.propTypes = {
  init: PropTypes.number,
  total: PropTypes.number,
  setCount: PropTypes.func,
};
export default CartCounter;
