import { Link } from "react-router-dom"
import { styled } from "styled-components"

const ProductStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`


function Product() {
  return (
    <ProductStyled>
      <h1>صفحه محصول</h1>
      <Link to="/cart">
       اضافه کردن به کارت 
      </Link>
    </ProductStyled>
  )
}

export default Product