import { styled } from "styled-components";
import Slider from "../components/slider/Slider";
import { useRef } from "react";
import { SwiperSlide } from "swiper/react";

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
`;

const SwiperSlideStyled = styled(SwiperSlide)`
  background-color: #a7f8fd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Home() {
  const sliderRef = useRef(null);

  const handleSlideChange = (e) => {
    const activeIndex = e.realIndex;
    console.log("Current active index:", activeIndex);

    // Check if the last slide is reached
    if (activeIndex === e.slides.length - 1) {
      // Delay the slide back to the beginning by 1 second
      setTimeout(() => {
        e.slideTo(0);
      }, 2000);
    }
  };
  return (
    <HomeWrapper>
      <SliderWrapper>
        <Slider
          ref={sliderRef}
         

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
      <button onClick={() => sliderRef.current.goNext()}>next</button>
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
