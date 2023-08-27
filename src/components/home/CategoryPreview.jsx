import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Title } from "../common/Title";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import ProductItem from "../product/ProductCard";
import PreviewNavigation from "./PreviewNavigation";
import { useRef } from "react";

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
  &:hover{
    background-color: #126ec4eb;
  }
  border-radius: 50px;
  color: #fff;
  padding: .4rem 1rem;
`;

function CategoryPreview({ title, data }) {
  const sliderRef = useRef(null);
  return (
    <Wrapper>
      <HeaderContainer>
        <Title>{title}</Title>
        <SeeMoreTag>دیدن محصولات</SeeMoreTag>
        <span style={{ flex: 1 }}></span>
        <PreviewNavigation
          onLeft={() => sliderRef.current.goNext()}
          onRight={() => sliderRef.current.goPrev()}
        />
      </HeaderContainer>
      <Slider ref={sliderRef} spaceBetween={10} slidesPerView={4}>
        {data?.map((product, idx) => (
          <SwiperSlide key={idx}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
      </Slider>
    </Wrapper>
  );
}

CategoryPreview.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};

export default CategoryPreview;
