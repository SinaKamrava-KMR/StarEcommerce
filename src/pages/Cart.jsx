import { styled } from "styled-components";
import OrderStatus from "../components/cart/OrderStatus";
import CartAside from "../components/cart/CartAside";
import CartTable from "../components/cart/CartTable";
import CartRow from "../components/cart/CartRow";

const CartStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  justify-content: center;
  padding-top: 12rem;
`;
const Container = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  gap: 3rem;
  flex: 1;
`;

function Cart() {
  return (
    <CartStyled>
      <OrderStatus state={0} />
      <Container>
        <CartTable>
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
          <CartRow />
        </CartTable>
        <CartAside />
      </Container>
    </CartStyled>
  );
}

export default Cart;
