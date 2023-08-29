import { useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useProductById } from "../hooks/useProductById";
import Loading from "../components/common/Loading";
import ProductSlider from "../components/product/ProductSlider";
import { HiChevronLeft } from "react-icons/hi2";
import ChooseSize from "../components/product/ChooseSize";
import ChooseColor from "../components/product/ChooseColor";
import ProductCount from "../components/product/ProductCount";
import { convertToPersianNumber } from "../utils/helper";
import { useState } from "react";

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
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AddToCartBtn = styled.div`
  color: #f8f8f8;
  background-color: #222;
  padding: 1rem;
  max-width: 50%;
  text-align: center;
  border-radius: 50px;
  flex: 1;
  &:hover{
    background-color: #0b0b0b;
  }
  cursor: pointer;
`;
const Price = styled.p`
  color: #ff6c6c;
  font-size: 3rem;
`;

function Product() {
  let { productId } = useParams();
  const [count, setCount] = useState(1);
  const { isLoading, product } = useProductById(productId);

  const handleProductCount = (c) => {
    setCount(c);
  };

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
          <ProductCount
            quantity={product.quantity}
            onCount={handleProductCount}
          />
        </Row>
        <span style={{ flex: 1 }}></span>
        <Row>
          <AddToCartBtn>افزودن به سبد خرید</AddToCartBtn>
          <Price>
            {`${convertToPersianNumber(product.price * count)} تومان`}
          </Price>
        </Row>
      </Container>
    </ProductStyled>
  );
}

export default Product;
