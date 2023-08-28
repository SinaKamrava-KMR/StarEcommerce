import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/common/Loading";
import ProductSlider from "../components/product/ProductSlider";

const ProductStyled = styled.div`
  height: 100vh;

  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  gap: 3rem;
  align-items: center;
`;
const Container = styled.div`
  flex: 1;
`;

function Product() {
  let { productId } = useParams();
  const { isLoading, product } = useProductById(productId);

  console.log(product);

  if (isLoading) return <Loading />;
  return (
    <ProductStyled>
      <ProductSlider images={product.images} />
      <Container>
        <p>{product.name}</p>
        <div dangerouslySetInnerHTML={{ __html: product.description }} />
      </Container>
    </ProductStyled>
  );
}

export default Product;
