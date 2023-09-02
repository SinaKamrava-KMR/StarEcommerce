import { styled } from "styled-components";
import OrderStatus from "../components/cart/OrderStatus";

const CartStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

function Cart() {
  return (
    <CartStyled>
      <OrderStatus state={0} />
    </CartStyled>
  );
}

export default Cart;
