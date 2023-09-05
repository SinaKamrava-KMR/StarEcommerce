import { styled } from "styled-components";
import OrderStatus from "../components/cart/OrderStatus";
import { Title } from "../components/cart/PurchaseStyle";
import { useSelector } from "react-redux";
import { convertToP, convertToPersianNumber } from "../utils/helper";
const StateWrapper = styled.div`
  width: 50%;
`;
const ShiipingStyled = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 10rem;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 40%;
  height: 320px;
  box-shadow: 0 0 10px #cfcfcf;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.5rem;
`;
const Head = styled.p`
  font-weight: 600;
 
  color:${props=>props.price?"#fb5a5a":"#43454a"} ;
`;
const Content = styled.p`
  color:${props=>props.price?"#fb5a5a":"#111c2e"} ;
  font-weight: 600;
`;
const PayButton = styled.p`
  color:white;
  font-weight: bold;
  background-color: #0c9170;
  &:hover{
    background-color: #057d5f;

  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .5rem;
  padding-block:1rem;
`;

function Shipping() {
  let { products, deliveryDate } = useSelector((state) => state.cart);
  deliveryDate = deliveryDate.split("/").map(num=>convertToP(num)).join("/")
  const { name, lastName, address, phoneNumber } = useSelector(
    (state) => state.user
  );
  const pricesSum =products.reduce((acc, nxt) => {
    return acc + nxt.price * nxt.productCount;
  }, 0);

  return (
    <ShiipingStyled>
      <StateWrapper>
        <OrderStatus state={2} />
      </StateWrapper>
      <Title>نهایی کردن خرید </Title>
      <Box>
        <Row>
          <Head>
            نام و نام خانوادگی  :
          </Head>
          <Content>
            {name} {lastName}
          </Content>

        </Row>
        <Row>
          <Head>
              ادرس :
          </Head>
          <Content>
            {address}
          </Content>
        </Row>
        <Row>
          <Head>
              شماره تماس :
          </Head>
          <Content>
            {convertToP(phoneNumber)}
          </Content>
        </Row>
        <Row>
          <Head >
                تاریخ تحویل  :
          </Head>
          <Content>
            {deliveryDate} 
          </Content>
        </Row>
        <Row>
          <Head price>
               قیمت کل :
          </Head>
          <Content price>
            {convertToPersianNumber(pricesSum)} تومان
          </Content>
          <span style={{flex:1}}></span>
          <Head >
                تعداد محصولات :
          </Head>
          <Content >
            {convertToPersianNumber(products.length)} 
          </Content>
        </Row>
        <span style={{ flex: 1 }}></span>
        <a href="http://localhost:5174/">
        <PayButton>
          پرداخت 
        </PayButton>
        </a>
      </Box>
    </ShiipingStyled>
  );
}

export default Shipping;
