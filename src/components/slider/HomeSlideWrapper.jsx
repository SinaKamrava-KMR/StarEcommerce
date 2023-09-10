import { styled } from "styled-components";
import PropTypes from "prop-types";
import { HiArrowLongLeft } from "react-icons/hi2";
const Wrapper = styled.div`
  width: 88%;
  margin-inline: auto;
  padding-left: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 1rem;
  @media (max-width: 1000px) {
    width: 100% ;
    padding: 0;
    flex-direction: column;
  gap: .5rem;
  
  }
`;

const Image = styled.img`
  width: 500px;
  height: 400px;
  object-fit: fill;
  @media (max-width: 1000px) {
   
  width: 250px;
  height: 200px;
  
  }
`;
const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (max-width: 1000px) {
    gap: 1rem;
    flex: 0;
    width: 80%;
  
  }
`;
const SlideAnimation = styled.div`
  /* animation: ${(props) =>
    props.active ? `slideAnimation 1s ease-in-out forwards;` : "none"};
  opacity: 0; */
  
  animation-name: ${(props) => (props.active ? "slideAnimation" : "none")};
  animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.2s;
  @keyframes slideAnimation {
    0% {
      transform: translate(-80px, -10px);
      opacity: 0;
    }
    100% {
      transform: translate(-80px, -50px);
      opacity: 1;
    }
  }
  @media (max-width: 1000px) {
    width:80%;
    margin-top:10rem;
  }
`;

const Title = styled.p`
  animation-name: ${(props) => (props.active ? "up" : "none")};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.5s;
  font-size: 3.5rem;
  font-weight: 600;
  width: 500px;
  @keyframes up {
    0% {
      transform: translate(0, -10px);
      opacity: 0;
    }
    100% {
      transform: translate(0, -60px);
      opacity: 1;
    }
  }
  @media (max-width: 1000px) {
    
    font-size: 1.8rem;
  
  
  }
`;
const Description = styled.p`
  animation-name: ${(props) => (props.active ? "up" : "none")};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  opacity: 0;
  animation-delay: 0.8s;
  font-size: 2rem;
  font-weight: 400;
  width: 500px;
  @keyframes up {
    0% {
      transform: translate(0, -10px);
      opacity: 0;
    }
    100% {
      transform: translate(0, -40px);
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    
    font-size: 1.4rem;
    width: 100%;
  
  }
`;
const Button = styled.div`
  animation-name: ${(props) => (props.active ? "up" : "none")};
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
  animation-delay: 1s;
  opacity: 0;
  background-color: #232323;
  border-radius: 50px;
  padding: 1rem 2rem;

  display: flex;
  justify-content: center;
  gap: 1rem;
  color: white;
  align-self: flex-end;
  min-width: 200px;
  margin-top: 4rem;
  transition: all 0.2s ease-in;
  & > * {
    transition: all 0.2s ease-in;
  }
  cursor: pointer;
  &:hover *:not(p) {
    transform: translateX(-2px);
  }
  &:hover {
    background-color: #111111;
  }
  @keyframes up {
    0% {
      transform: translate(0, 50px);
      opacity: 0;
    }
    100% {
      transform: translate(0, -10px);
      opacity: 1;
    }
  }

  @media (max-width: 1000px) {
    align-items: center;
    padding: .5rem 0;
    font-size: 1rem;
    min-width: 150px;
    margin-top: 0;
  }
`;

const contents = [
  {
    title: "تخفیف وسایل ارایشی و بهداشتی",
    description:
      "تمامی سفارش ها رایگان ارسال می‌شود و حداکثر طی 2 تا 6 روز کاری به دست مشتری می‌رسد. فروش ویژه انواع وسایل ارایسشی و بهداشتی فقط ۲۹۹ تومان  تخفیف تابستانه",
    img: "./public/homeImages/slide3.png",
  },
  {
    title: "کیف های برند سنجاق ",
    description:
      "فروش ویژه از برند محبوب سنجاق بزرگ ترین تولید کننده کیف زنانه در ایران  فقط ۵۰۰ هزار تومان  تخفیف تابستانه",
    img: "./public/homeImages/slide7.png",
  },
  {
    title: "فروش ویژه کفش نایک ",
    description:
      " تمامی سفارش ها رایگان ارسال می‌شود و حداکثر طی 2 تا 6 روز کاری به دست مشتری می‌رسد.فروش ویژه انواع  کفش های نایک شامل تخفیف تابستانه",
    img: "./public/homeImages/slide5.png",
  },
  {
    title: " شیک ترین کت های برند المیرا ",
    description:
      "فروش ویژه انواع  کت و شلوار های مجلسی و تک مردانه از برند محبوب المیرا  تمامی سفارش ها رایگان ارسال می‌شود و حداکثر طی 2 تا 6 روز کاری به دست مشتری می‌رسد.",
    img: "./public/homeImages/slide10.png",
  },
];

function HomeSlideWrapper({ active, index }) {
  return (
    <Wrapper>
      <SlideAnimation active={active}>
        <Image src={active && contents[index].img} />
      </SlideAnimation>
      <Content>
        <Title active={active}>{active && contents[index].title}</Title>
        <Description active={active}>
          {active && contents[index].description}
        </Description>
        <Button active={active}>
          <p>خرید محصول</p>
          <HiArrowLongLeft fontSize={25} />
        </Button>
      </Content>
    </Wrapper>
  );
}

HomeSlideWrapper.propTypes = {
  swiper: PropTypes.object,
  index: PropTypes.number,
  active: PropTypes.bool,
};

export default HomeSlideWrapper;
