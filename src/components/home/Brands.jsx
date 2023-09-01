import { styled } from "styled-components";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import Brand from "./brand";
import { Title } from "../common/Title";

const Wrapper = styled.div`
  width: 100%;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

// 0
// : 
// "پادامیر"
// 1
// : 
// "سنجاق"
// 2
// : 
// "الپا"
// 3
// : 
// "اسپینر"
// 4
// : 
// "ادیداس"
// 5
// : 
// "نایک"
// 6
// : 
// "تک"
const brands = [
  {
    brand: "پادامیر",
    src: "./public/brands/brand1.png",
    color: "#1cf2e45a",
  },
  {
    brand: "سنجاق",
    src: "./public/brands/brand2.png",
    color: "#1c92f25a",
  },
  {
    brand: "الپا",
    src: "./public/brands/brand4.png",
    color: "#a41cf25a",
  },
  {
    brand: "اسپینر",
    src: "./public/brands/brand5.png",
    color: "#1cf2755a",
  },
  {
    brand: "ادیداس",
    src: "./public/brands/brand6.png",
    color: "#f21c1c5a",
  },
  {
    brand: "نایک",
    src: "./public/brands/brand7.png",
    color: "#f2eb1c5a",
  },
  {
    brand: "تک",
    src: "./public/brands/brand8.png",
    color: "#1c27f25a",
  },
  {
    brand: "پادامیر",
    src: "./public/brands/brand9.png",
    color: "#1cf2b55a",
  },
  {
    brand: "سنجاق",
    src: "./public/brands/brand10.png",
    color: "#f21c1c5a",
  },
  {
    brand: "ادیداس",
    src: "./public/brands/brand2.png",
    color: "#f4f86f5a",
  },
];

const Brands = () => {
  
  return (
    <Wrapper>
      <Title>برند های محبوب</Title>
      <Slider slidesPerView={8}>
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
            <Brand brand={brand} />
          </SwiperSlide>
        ))}
      </Slider>
    </Wrapper>
  );
};

export default Brands;
