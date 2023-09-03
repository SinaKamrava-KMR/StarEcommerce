import { HiOutlineCheck } from "react-icons/hi2";
import {
  DiscountInput,
  IconWrapper,
  Row,
  SubmitButton,
  Wrapper,
} from "./CartAsideStyle";
import PropTypes from "prop-types";
import { convertToPersianNumber } from "../../utils/helper";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { show } from "../../redux/reducer/toast/toastSlice";
import { Link } from "react-router-dom";

const shippingCost = 5000;
const CartAside = ({ carts = [] }) => {
  const [discountPrice, setDiscountPrice] = useState(0);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const pricesSum = carts.reduce((acc, nxt) => {
    return acc + nxt.price * nxt.productCount;
  }, 0);

  const handleChackDiscount = () => {
    if (value === "sina") {
      dispatch(
        show({
          message: "تخفیف شما اعمال شد",
          status: "success",
        })
      );
      setDiscountPrice((pricesSum * 1) / 4);
      setValue("");
    } else {
      dispatch(
        show({
          message: "کد تخفیف نامعتبر است",
          status: "error",
        })
      );
    }
  };
  return (
    <Wrapper>
      <Row>
        <p>تعداد محصولات</p>
        <p>{convertToPersianNumber(carts.length)} کالا </p>
      </Row>
      <Row>
        <p>قیمت کل</p>
        <p>{convertToPersianNumber(pricesSum)} تومان</p>
      </Row>
      <Row>
        <p>هزینه ارسال</p>
        <p>{convertToPersianNumber(shippingCost)} تومان</p>
      </Row>
      <Row discount>
        <p>تخفیف</p>
        <p>{convertToPersianNumber(discountPrice)} تومان</p>
      </Row>
      <Row input>
        <DiscountInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="کد تخفیف"
        />
        <IconWrapper onClick={handleChackDiscount}>
          <HiOutlineCheck />
        </IconWrapper>
      </Row>
      <span style={{ flex: 1 }}></span>
      <Row>
        <p>قیمت نهایی</p>
        <p>
          {convertToPersianNumber(pricesSum + shippingCost - discountPrice)}
          تومان
        </p>
      </Row>
      <Link to="/purchase">
        <SubmitButton>ثبت سفارش</SubmitButton>
      </Link>
    </Wrapper>
  );
};

CartAside.propTypes = {
  carts: PropTypes.array,
};
export default CartAside;
