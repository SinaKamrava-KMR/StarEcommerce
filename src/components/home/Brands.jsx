import { styled } from "styled-components";
import Slider from "../slider/Slider";
import { SwiperSlide } from "swiper/react";
import Brand from "./brand";

const Wrapper = styled.div`


width: 100%;
display: flex;
flex-direction: column;
gap: 4rem;


`;

const Title = styled.p`
    font-weight: 700;
    font-size: 2.3rem;
    color: #25252e;
    margin-right: 3rem;
`
const brands = [
  {
    brand: "chanel",
    src: "./public/brands/brand1.png",
    color: "#1cf2e45a",
  },
  {
    brand: "luis",
    src: "./public/brands/brand2.png",
    color: "#1c92f25a",
  },
  {
    brand: "chanse",
    src: "./public/brands/brand4.png",
    color: "#a41cf25a",
  },
  {
    brand: "creative",
    src: "./public/brands/brand5.png",
    color: "#1cf2755a",
  },
  {
    brand: "addidas",
    src: "./public/brands/brand6.png",
    color: "#f21c1c5a",
  },
  {
    brand: "jordan",
    src: "./public/brands/brand7.png",
    color: "#f2eb1c5a",
  },
  {
    brand: "nike",
    src: "./public/brands/brand8.png",
    color: "#1c27f25a",
  },
  {
    brand: "puma",
    src: "./public/brands/brand9.png",
    color: "#1cf2b55a",
  },
  {
    brand: "reebok",
    src: "./public/brands/brand10.png",
    color: "#f21c1c5a",
  },
  {
    brand: "fashion",
    src: "./public/brands/brand2.png",
    color: "#f4f86f5a",
  },
];

const Brands = () => {
  return (
    <Wrapper>
      <Title>
        برند های محبوب
        </Title>
      <Slider slidesPerView={10}>
        {brands.map((brand, idx) => (
          <SwiperSlide key={idx}>
                <Brand brand={brand}/>
          </SwiperSlide>
        ))}
      </Slider>
    </Wrapper>
  );
};



export default Brands;
