import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  height: 70%;
  width: 35%;
  border-radius: 2rem;
  box-shadow: 0 0 50px #12121219;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  flex-direction: column;
`;
const Image = styled.img`
  height: 200px;
  width: 200px;
  object-fit: cover;
`;
const Text = styled.p`
  font-weight: 600;
  text-align: center;
  object-fit: cover;
  width: 70%;
  color: #6c6c6c;
`;
const Button = styled.p`
  font-weight: 600;
  color: #ffffff;
  
  background-color: ${props=>props.error?"#ff8080":"#07ca65"};
  cursor: pointer;
  &:hover {
    background-color: ${props=>props.error?"#f84f4f":"#07ab56"};
  }
  text-align: center;
  border-radius: 5rem;
  width: 60%;
  padding: 1rem;
`;

const data = {
  success: {
    src: "/public/payment/p5.png",
    message: `با تشکر از خرید شما , سفارش شما با موفقیت ثبت شده جهت هماهنگی ارسال با شما تماس گرفته می شود`,
  },
  rejected: {
    src: "/public/payment/p6.png",
    message: "پرداخت شما موفقیت امیز نبود سفارش شما در لیست انتظار پرداخت است",
  },
};

const ShippingResult = () => {
  const { status } = useParams();
  console.log(status);
  return (
    <Wrapper>
      <Box
        as={motion.div}
        initial={{ transform: "scale(.6)", opacity: 0 }}
        animate={{ transform: "scale(1)", opacity: 1 }}
      >
        <Image src={data[status].src} />
        <Text>
            {data[status].message}
        </Text>
        <span style={{ flex: 1 }}></span>
        <Button error={"rejected"===status}>بازگشت به سایت</Button>
      </Box>
    </Wrapper>
  );
};

export default ShippingResult;
