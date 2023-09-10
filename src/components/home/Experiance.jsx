import { styled } from "styled-components";
import { Title } from "../common/Title";
import { ImHappy, ImCoinPound, ImGift, ImCart } from "react-icons/im";



const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media (max-width: 900px) {
   display: none;
  }
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

`;
const SubTitle = styled.p`
  color: #636363;
  font-size: 1.8rem;
  border-right: 1px solid #676767;
  padding-right: 2rem;
`;
const Items = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  gap: 2rem;
  flex: 1;
  padding-inline: 2rem;
`;
const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  background-color: #ebebeb;
  color:#4f4f4f;
  border-radius:.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:23px;
`;
const ItemTitel = styled.p`
    color: #333;
    font-size: 16px;
    font-weight: 600;
`;
const ItemDescription = styled.p`
    color: #6a6a6a;
    font-size: 14px;    
`;
const contents = [
  {
    icon: <ImCoinPound />,
    title: "محصولات با کیفیت",
    description: "تمام محصولات ما با گارنتی طولانی مدت فروخته خواهد شد",
  },
  {
    icon: <ImHappy />,
    title: "رضایت مشتری",
    description: "تمام مشتریان ما از خریدشان رضایت کامل را دارند ",
  },
  {
    icon: <ImGift />,
    title: "جوایز ویژه",
    description: " ‌تخفیف های ویژه و اهدای جوایز نفیس به برترین مشتریان ما",
  },
  {
    icon: <ImCart />,
    title: "ارسال سریع",
    description:
      "تمام محصولات ما از طریق سریع ترین سیستم حمل نقل ارسال خواهد شد",
  },
];



const Experiance = () => {
  return (
    <Wrapper>
      <Container>
        <Title>
          ما بهترین تجربه
          <p> را برای مشتریان فراهم میکنیم</p>
        </Title>
        <SubTitle>
          ما این اطمینان را میدهیم که مشتریان ما بهترین خرید را تجربه خواهند کرد
        </SubTitle>
      </Container>

      <Items>
        {contents.map((item, i) => {
          return (
            <Item key={i}>
              <IconWrapper>{item.icon}</IconWrapper>
              <ItemTitel>{item.title}</ItemTitel>
              <ItemDescription>{item.description}</ItemDescription>
            </Item>
          );
        })}
      </Items>
    </Wrapper>
  );
};

export default Experiance;
