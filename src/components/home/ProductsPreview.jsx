import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Title } from "../common/Title";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import ProductCard from "../product/ProductCard";
import PreviewNavigation from "./PreviewNavigation";
import { useRef } from "react";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
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
const SeeMoreTag = styled.p`
  cursor: pointer;
  font-size: 12px;
  background-color: #3794ebeb;
  &:hover {
    background-color: #126ec4eb;
  }
  border-radius: 50px;
  color: #fff;
  padding: 0.4rem 1rem;
`;

function ProductsPreview({ title, data, categoryId, wishList=[] }) {
  const sliderRef = useRef(null);
  let filteredList = data?.filter((item) => item.category === categoryId);

  return (
    <Wrapper>
      <HeaderContainer>
        <Title>{title}</Title>
        <Link to={`/products?category=${categoryId}&page=1`}>
          <SeeMoreTag>دیدن محصولات</SeeMoreTag>
        </Link>
        <span style={{ flex: 1 }}></span>
        <PreviewNavigation
          onLeft={() => sliderRef.current.goNext()}
          onRight={() => sliderRef.current.goPrev()}
        />
      </HeaderContainer>
      <Slider ref={sliderRef} spaceBetween={10} slidesPerView={4}>
        {filteredList?.reverse()?.map(
          (product, idx) =>
            idx < 6 && (
              <SwiperSlide key={idx}>
                <ProductCard
                  product={product}
                  isLike={
                    wishList.find((item) => item._id === product._id)
                      ? true
                      : false
                  }
                />
              </SwiperSlide>
            )
        )}
      </Slider>
    </Wrapper>
  );
}

ProductsPreview.propTypes = {
  title: PropTypes.string,
  categoryId: PropTypes.string,
  data: PropTypes.array,
  wishList: PropTypes.array,
};

export default ProductsPreview;
