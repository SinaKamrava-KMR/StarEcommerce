import { forwardRef } from "react";
import PropTypes from "prop-types";
// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import { useImperativeHandle } from "react";
import { useRef } from "react";
import { Swiper } from "swiper/react";
import { styled } from "styled-components";

// Import Swiper styles
import "swiper/css";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Slider = forwardRef(
  (
    { onSlideChange = () => {}, autoPlay = false, slidesPerView=1, children },
    ref
  ) => {
    const swiperRef = useRef(null);

    useImperativeHandle(ref, () => ({
      goNext() {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideNext();
        }
      },
      goPrev() {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slidePrev();
        }
      },

      slideTo(slide) {
        if (swiperRef.current && swiperRef.current.swiper) {
          swiperRef.current.swiper.slideTo(slide);
        }
      },
    }));

    return (
      <Wrapper>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, A11y, Autoplay, EffectFade]}
          slidesPerView={slidesPerView}
          navigation
          pagination={{
            clickable: true,
          }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={onSlideChange}
          style={{ width: "100%", height: "100%" }}
          ref={swiperRef}
          autoplay={autoPlay}
        >
          {children}
        </Swiper>
      </Wrapper>
    );
  }
);

Slider.propTypes = {
  onSlideChange: PropTypes.func,
  onActiveSlide: PropTypes.func,
  effect: PropTypes.string,
  autoPlay: PropTypes.object,
  children: PropTypes.node,
  render: PropTypes.node,
  slidesPerView: PropTypes.number,
};

Slider.displayName = "Slider";

export default Slider;
