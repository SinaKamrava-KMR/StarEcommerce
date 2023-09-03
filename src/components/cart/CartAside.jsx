import { HiOutlineCheck } from "react-icons/hi2";
import {
  DiscountInput,
  IconWrapper,
  Row,
  SubmitButton,
  Wrapper,
} from "./CartAsideStyle";

const CartAside = () => {
  return (
    <Wrapper>
      <Row>
        <p>تعداد محصولات</p>
        <p>۲ کالا</p>
      </Row>
      <Row>
        <p>قیمت کل</p>
        <p>۲۰۰۰ تومان</p>
      </Row>
      <Row>
        <p>هزینه ارسال</p>
        <p>۵۰۰۰ تومان</p>
      </Row>
      <Row discount>
        <p>تخفیف</p>
        <p>۰</p>
      </Row>
      <Row input>
        <DiscountInput placeholder="کد تخفیف" />
        <IconWrapper>
          <HiOutlineCheck />
        </IconWrapper>
      </Row>
      <span style={{ flex: 1 }}></span>
      <SubmitButton>ثبت سفارش</SubmitButton>
    </Wrapper>
  );
};

export default CartAside;
