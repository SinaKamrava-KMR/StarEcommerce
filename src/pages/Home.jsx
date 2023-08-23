import { styled } from "styled-components";
import Slider from "../components/slider/Slider";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";
import SliderCircle from "../components/home/SliderCircle";
import { useState } from "react";
import { useEffect } from "react";

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

const SwiperSlideStyled = styled(SwiperSlide)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SeeMore = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 31% 69% 23% 77% / 66% 28% 82% 24%;

  position: absolute;
  bottom: 14%;
  right: 25%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
  transition: all .5s ease-in;
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
        <SliderCircle expand={expand} />
        <SeeMore>
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
            delay: 3000,
            disableOnInteraction: false,
          }}
          onSlideChange={handleSlideChange}
        >
          <SwiperSlideStyled>Slide 1</SwiperSlideStyled>
          <SwiperSlideStyled>Slide 2</SwiperSlideStyled>
          <SwiperSlideStyled>Slide 3</SwiperSlideStyled>
          <SwiperSlideStyled>Slide 4</SwiperSlideStyled>
          <SwiperSlideStyled>Slide 5</SwiperSlideStyled>
          <SwiperSlideStyled>Slide 6</SwiperSlideStyled>
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
