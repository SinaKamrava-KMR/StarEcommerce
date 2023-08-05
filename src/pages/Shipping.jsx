import { Link } from "react-router-dom";
import { styled } from "styled-components";

const ShiipingStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

function Shipping() {
  return (
    <ShiipingStyled>
      <h1> پرداخت محصولات در سبد خرید</h1>
      <Link to="/">تکمیل خرید محصول و بازگشت</Link>
    </ShiipingStyled>
  );
}

export default Shipping;
