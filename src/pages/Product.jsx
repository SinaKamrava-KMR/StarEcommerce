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
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../redux/reducer/cart/cartSlice";
import LikeButton from "../components/product/LikeButton";
import {
  addFavoriteProduct,
  removeFavoriteProduct,
} from "../redux/reducer/wishlist/wishlistSlice";

const ProductStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 3rem;
  margin-top: 8rem;
  gap: 3rem;
  justify-content: center;
  position: relative;
`;
const LikeWrapper = styled.div`
  position: absolute;
  left: 2rem;
  top: 0;
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
  display: flex;
  align-items: center;
  gap: 2rem;
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
const Brand = styled.p`
  font-size: 1.4rem;
  color: #4b4b4b;
  background-color: #fff9cb;
  border-radius: 2rem;
  padding: .5rem 2rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const AddToCartBtn = styled.div`
  color: #f8f8f8;
  background-color: ${(props) => (props.isActive ? "#999" : "#222")};
  padding: 1rem;
  max-width: 50%;
  text-align: center;
  border-radius: 50px;
  flex: 1;
  &:hover {
    background-color: ${(props) => (props.isActive ? "#999" : "#000000")};
  }

  cursor: ${(props) => (props.isActive ? " not-allowed" : "pointer")};
`;
const Price = styled.p`
  color: ${(props) => (props.isActive ? "#a9a9a9" : "#ff6c6c")};
  font-size: 3rem;
`;

function Product() {
  let { productId } = useParams();
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);
  const [color, setColor] = useState("#646464");
  const { isLoading, product } = useProductById(productId);
  const wishList = useSelector((state) => state.wishlist.products);
  const handleProductCount = (c) => {
    setCount(c);
  };

  const handleLike = (state) => {
    if (state) {
      dispatch(addFavoriteProduct(product));
    } else {
      dispatch(removeFavoriteProduct({ id: product._id }));
    }
  };

  const handleAddToCart = () => {
    console.log({ ...product, productCount: count, color });
    if (product.quantity !== 0) {
      dispatch(addProduct({ ...product, productCount: count, color }));
    }
  };

  if (isLoading) return <Loading />;
  return (
    <ProductStyled>
      
      <LikeWrapper>
        <LikeButton
          onLike={handleLike}
          init={
            wishList.find((item) => item._id === product._id) ? true : false
          }
        />
      </LikeWrapper>
      <ProductSlider images={product.images} />
      <Container>
        <Title>
          {product.name}
          <Brand>{product.brand}</Brand>
        </Title>
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
          <ChooseColor onColor={setColor} />
          <ProductCount
            quantity={product.quantity}
            onCount={handleProductCount}
          />
        </Row>
        <span style={{ flex: 1 }}></span>
        <Row>
          <AddToCartBtn
            isActive={product.quantity === 0}
            onClick={handleAddToCart}
          >
            افزودن به سبد خرید
          </AddToCartBtn>
          <Price isActive={product.quantity === 0}>
            {`${convertToPersianNumber(product.price * count)} تومان`}
          </Price>
        </Row>
      </Container>
    </ProductStyled>
  );
}

export default Product;
