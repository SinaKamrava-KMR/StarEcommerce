import { motion } from "framer-motion";
import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { useCreateOrder } from "../hooks/useCreateOrder";
import Loading from "../components/common/Loading";
import { useEffect } from "react";
import { useState } from "react";

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

  background-color: ${(props) => (props.error ? "#ff8080" : "#07ca65")};
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.error ? "#f84f4f" : "#07ab56")};
  }
  text-align: center;
  border-radius: 5rem;
  width: 250px;
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

  const [isFirstTime, setIsFirstTime] = useState(true);
  const { isLoading, mutate } = useCreateOrder();
  let { products } = useSelector((state) => state.cart);

  let delivary = localStorage.getItem("delivery") || "";
  delivary = JSON.parse(delivary);
  const userId = Cookies.get("userId");

  const newList = products.map((item) => {
    return { product: item._id, count: item.productCount };
  });

  const requestObj = {
    user: userId,

    products: newList,

    deliveryDate: delivary.date,
    deliveryStatus: true,
  };

  useEffect(() => {
    if (status === "success" && isFirstTime && newList.length > 0 && !isLoading) {
      mutate(requestObj);
      setIsFirstTime(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, newList, isLoading, mutate, isFirstTime]);

  if (!isLoading && isFirstTime && status === "success") {
    return <Loading />;
  }

  return (
    <Wrapper>
      <Box
        as={motion.div}
        initial={{ transform: "scale(.6)", opacity: 0 }}
        animate={{ transform: "scale(1)", opacity: 1 }}
      >
        <Image src={data[status].src} />
        <Text>{data[status].message}</Text>
        <span style={{ flex: 1 }}></span>
        <Link to="/">
          <Button error={"rejected" === status}>بازگشت به سایت</Button>
        </Link>
      </Box>
    </Wrapper>
  );
};

export default ShippingResult;

// const result = {
//   deliveryDate: "1402/06/14",
//     deliveryStatus: true,
//   products: [
//     { product: '64de64ebd61576ab0ede3f0d', count: 1 },

//     { product: '64de5dc4d61576ab0ede3c73', count: 1 },

//     { product: '64db219d6e488759aa74fe1b', count: 5 },

//     { product: '64dcb07099b778fda0212551', count: 5 },

//     { product: '64ef5ede81929bec3097c6d4', count: 1 },

//     { product: '64de60c2d61576ab0ede3dad', count: 1 },

//     { product: '64dca42c99b778fda021057e', count: 1 },
//   ],
//   user: "64ca07da21987c0c3caece07"

// }
