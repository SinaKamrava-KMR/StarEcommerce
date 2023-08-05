import { Link } from "react-router-dom"
import { styled } from "styled-components"

const ProductsStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`
function Products() {
  return (
    <ProductsStyled>
      <h1>صفحه دسته بندی  کالا ها</h1>
      <Link to="/product/glkggfmvb">
        رفتن به صفحه محصول
      </Link>
    </ProductsStyled>
  )
}

export default Products