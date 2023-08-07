import { Link } from "react-router-dom"
import { styled } from "styled-components"

const CartStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;

`



function Cart() {
  return (
    <CartStyled>
      <h1>صفحه سبد خرید </h1>
      <Link to="/shipping">
      پرداخت نهایی محصول 
      </Link>
    </CartStyled>
  )
}

export default Cart