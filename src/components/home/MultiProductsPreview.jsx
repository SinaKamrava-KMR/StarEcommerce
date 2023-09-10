import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Title } from "../common/Title";
import useProduct from "../../hooks/useProduct";
import PreviewFilter from "./PreviewFilter";
import ProductCard from "../product/ProductCard";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/reducer/cart/cartSlice";

const Wrapper = styled.div`
  width: 100%;

  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  grid-template-rows: repeat(2, minmax(250px, 320px));
  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: repeat(2, minmax(150px, 200px));
  }
`;

function MultiProductsPreview({ wishList = [] }) {
  const dispatch = useDispatch();
  const { isLoading, products } = useProduct(1, 1000);
  const [list, setList] = useState([]);

  const handleSelectFilter = (id) => {
    if (id === "") {
      setList(products?.data?.products);
    } else {
      setList(() =>
        products?.data?.products.filter((item) => item.subcategory === id)
      );
    }
  };

  const handleAdToCart = (product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    if (!isLoading) {
      setList(products.data.products);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return (
    <Wrapper>
      <HeaderContainer>
        <Title>انتخابی سریع</Title>
        <PreviewFilter onChange={handleSelectFilter} />
      </HeaderContainer>
      <Container>
        {!isLoading &&
          list?.map(
            (product, i) =>
              !(i > 9) && (
                <ProductCard
                  key={product?._id}
                  isLike={
                    wishList.find((item) => item._id === product._id)
                      ? true
                      : false
                  }
                  addToCart={handleAdToCart}
                  product={product}
                />
              )
          )}
      </Container>
    </Wrapper>
  );
}

MultiProductsPreview.propTypes = {
  title: PropTypes.string,
  wishList: PropTypes.array,
};
export default MultiProductsPreview;
