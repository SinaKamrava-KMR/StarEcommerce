import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/common/Loading";

const ProductStyled = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;

function Product() {
  let { productId } = useParams();
  const { isLoading, product } = useProductById(productId);
  if (isLoading) return <Loading />;
  console.log(product);
  return <ProductStyled></ProductStyled>;
}

export default Product;
