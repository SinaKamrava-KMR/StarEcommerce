import PropTypes from "prop-types";
import { styled } from "styled-components";
import {
  HiMiniShoppingCart,
  HiCursorArrowRipple,
  HiCreditCard,
} from "react-icons/hi2";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
`;

const Line = styled.div`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  left: 2rem;
  right: 2rem;
  height: 0.5rem;
  border-radius: 5rem;
  background-color: #e9e9e9;
  z-index: -1;
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.5s ease-in-out;
  gap: 1rem;
  color: ${(props) => (props.state ? "#ffffff" : "#979797")};
  & > p {
    color: ${(props) => (props.state ? "#202020" : "#c7c7c7")};
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  font-size: 2.5rem;
  background-color: ${(props) => (props.state ? "#161522" : "#e9e9e9")};
`;

const stateList = [
  {
    title: "سبد خرید",
    icon: <HiMiniShoppingCart />,
  },
  {
    title: "ثبت سفارش",
    icon: <HiCursorArrowRipple />,
  },
  {
    title: "پرداخت نهایی",
    icon: <HiCreditCard />,
  },
];

const OrderStatus = ({ state = 0 }) => {
  return (
    <Wrapper>
      <Line />
      {stateList.map((item, i) => {
        return (
          <ItemWrapper key={i} state={state >= i}>
            <Circle state={state >= i}>{item.icon}</Circle>
            <p>{item.title}</p>
          </ItemWrapper>
        );
      })}
    </Wrapper>
  );
};

OrderStatus.propTypes = {
  state: PropTypes.number,
};

export default OrderStatus;
