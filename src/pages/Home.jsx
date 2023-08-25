import { styled } from "styled-components";
import Slider from "../components/slider/Slider";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SliderCircle from "../components/home/SliderCircle";
import { useState } from "react";
import { useEffect } from "react";
import PaginationSlider from "../components/slider/PaginationSlider";
import NavigationSlider from "../components/slider/NavigationSlider";
import HomeSlideWrapper from "../components/slider/HomeSlideWrapper";
import { motion } from "framer-motion";

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-inline: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

const SeeMore = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 31% 69% 23% 77% / 66% 28% 82% 24%;

  position: absolute;
  bottom: 14%;
  right: 20%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
  transition: all 0.5s ease-in;
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  &:hover {
    background-image: linear-gradient(120deg, #e85ef8 0%, #f94059 100%);
  }
`;

const DiscountAd = styled.p`
  width: 60px;
  height: 60px;
  border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%;

  position: absolute;
  top: 20%;
  left: 10%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
`;

const colors = ["#e23737", "#12769e", "#949494", "#090908"];

function Home() {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [expand, setExpand] = useState(false);
  const handleSlideChange = (e) => {
    const activeIndex = e.realIndex;
    // console.log("Current active index:", activeIndex);
    setActiveSlide(activeIndex);
    // Check if the last slide is reached
    if (activeIndex === e.slides.length - 1) {
      // Delay the slide back to the beginning by 1 second
      setTimeout(() => {
        e.slideTo(0);
      }, 4000);
    }
  };

  useEffect(() => {
    setExpand((s) => !s);
    let timeoutId;
    timeoutId = setTimeout(() => {
      setExpand((s) => !s);
    }, 500);

    return () => {
      // clearInterval(id);
      clearTimeout(timeoutId);
    };
  }, [activeSlide]);
  return (
    <HomeWrapper>
      <SliderWrapper>
        <SliderCircle color={colors[activeSlide]} expand={expand} />
        <NavigationSlider
          onLeft={() => sliderRef.current.goNext()}
          onRight={() => sliderRef.current.goPrev()}
        />
        <PaginationSlider
          activeIndex={activeSlide}
          length={4}
          colors={colors}
        />
        <SeeMore
          as={motion.div}
          initial={{ transform: "scale(2)", opacity: 0 }}
          animate={{ transform: "scale(1)", opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p>دیدن</p>
          <p>محصولات</p>
        </SeeMore>
        <DiscountAd>
          <p>۲۵٪</p>
          <p>تخفیف</p>
        </DiscountAd>
        <Slider
          ref={sliderRef}
          autoPlay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlide>
            <HomeSlideWrapper
              index={0}
              active={activeSlide === 0}
            ></HomeSlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <HomeSlideWrapper
              index={1}
              active={activeSlide === 1}
            ></HomeSlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <HomeSlideWrapper
              index={2}
              active={activeSlide === 2}
            ></HomeSlideWrapper>
          </SwiperSlide>
          <SwiperSlide>
            <HomeSlideWrapper
              index={3}
              active={activeSlide === 3}
            ></HomeSlideWrapper>
          </SwiperSlide>
        </Slider>
      </SliderWrapper>
      <button onClick={() => sliderRef.current.goNext()}>set expand</button>
      <button onClick={() => sliderRef.current.goPrev()}>prev</button>
      <button onClick={() => sliderRef.current.slideTo(2)}>Slide to 3</button>

      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
      <p>mdsnbgmbdmdsfbsdfj</p>
    </HomeWrapper>
  );
}

export default Home;
