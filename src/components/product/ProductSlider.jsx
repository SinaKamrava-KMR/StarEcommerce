import PropTypes from "prop-types";
import { styled } from "styled-components";
import Slider from "../slider/Slider";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
const Wrapper = styled.div`
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  
`;
const MainImage = styled.img`
  width: 400px;
  height: 420px;
  border-radius: 1rem;
  
`;
const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: .8rem;
`;
const ThumnailWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const ActiveBorder = styled.div`
  position: absolute;
  border-radius: 1.2rem;
  border: 3px solid #f5b039;
  width: 80px;
  height: 80px;
  top: -50%;
  left: 50%;
  z-index: 10;
  transform: translate(-31%, 43%);
`;
const LeftNav = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 10px #2222223d;
  width: 40px;
  height: 40px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  left: 10px;
  z-index: 10;
`;
const RightNav = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 10px #2222223d;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  width: 40px;
  height: 40px;

  right: 0;
  z-index: 10;
`;

function ProductSlider({ images = [] }) {
  const sliderRef = useRef(null);
  const [activeImage, setActiveImage] = useState(
    images[1] ? images[1] : images[0]
  );
  const handleSlideChange = (e) => {
    console.log(e.realIndex);
    setActiveImage(images[e.realIndex]);
  };
  return (
    <Wrapper>
      <MainImage
        src={`http://localhost:8000/images/products/images/${activeImage}`}
      />

      <ThumnailWrapper>
        <LeftNav onClick={() => sliderRef.current.goNext()}>
          <HiChevronLeft />
        </LeftNav>
        <RightNav onClick={() => sliderRef.current.goPrev()}>
          <HiChevronRight />
        </RightNav>
        <ActiveBorder />
        <Slider
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            width: "300px",
          }}
          initialSlide={1}
          slidesPerView={3}
          ref={sliderRef}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide></SwiperSlide>
          {images.map((img) => {
            return (
              <SwiperSlide key={img}>
                <Image
                  src={`http://localhost:8000/images/products/images/${img}`}
                />
              </SwiperSlide>
            );
          })}
          <SwiperSlide></SwiperSlide>
        </Slider>
      </ThumnailWrapper>
    </Wrapper>
  );
}
ProductSlider.propTypes = {
  images: PropTypes.array,
};
export default ProductSlider;
