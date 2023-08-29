import { styled } from "styled-components";
import FilterItems from "../components/products/FilterItems";
import ProductsContainer from "../components/products/ProductsContainer";

const ProductsStyled = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  margin-top: 8rem;
  padding: 0 3rem;
  position: relative;
`;

const Products = () => {
  return (
    <ProductsStyled>
      <FilterItems />
      <ProductsContainer />
    </ProductsStyled>
  );
};

export default Products;
