import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/common/Loading";
import ProductSlider from "../components/product/ProductSlider";
import { HiChevronLeft } from "react-icons/hi2";
import ChooseSize from "../components/product/ChooseSize";
import ChooseColor from "../components/product/ChooseColor";

const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  margin-top: 8rem;
  gap: 3rem;
  justify-content: center;
`;
const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 2.5rem;
`;

const RouteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  & > p {
    color: #777;
  }
`;
const Description = styled.div`
  width: 80%;
`;
const Row = styled.div`
  display: flex;
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
        <Title>{product.name}</Title>
        <RouteContainer>
          <p>{product.category.name}</p>
          <HiChevronLeft />
          <p>{product.subcategory.name}</p>
        </RouteContainer>
        <Description
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
        <ChooseSize />
        <Row>
          <ChooseColor />
          
        </Row>
      </Container>
    </ProductStyled>
  );
}

export default Product;
