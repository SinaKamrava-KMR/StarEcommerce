import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { DiscountAd, SeeMore, SliderWrapper } from "./BannerSliderStyles";
import SliderCircle from "./SliderCircle";
import NavigationSlider from "../slider/NavigationSlider";
import PaginationSlider from "../slider/PaginationSlider";
import { motion } from "framer-motion";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import HomeSlideWrapper from "../slider/HomeSlideWrapper";

const colors = ["#e23737", "#12769e", "#949494", "#090908"];

function BannerSlider() {

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
  )
}

export default BannerSlider