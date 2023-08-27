import { styled } from "styled-components";
import Logo from "../common/Logo";
import { BsPaypal,BsFillCreditCard2BackFill,BsCashCoin } from "react-icons/bs";
const Wrapper = styled.div`
  background-color: #f6f6f6;
  padding: 2rem;
  width: 100%;
  display: grid;
  border-top: 1px solid #b9b9b9;
  grid-template-columns: 400px repeat(auto-fill, minmax(200px, 1fr));
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
`;
// const Row = styled.div`
//   display: flex;
//   gap: 1rem;
// `;

const HeadText = styled.p`
  color: #454545;
  font-size: 1.6rem;
  font-weight: bold;
`;
const SubText = styled.p`
  color: #646464;
  font-size: 1.4rem;
  transition: transform 0.2s ease-in;
  cursor: pointer;
  &:hover {
    color: #292929;
  }
`;
const Description = styled.p`
  color: #6b6b6b;
  font-size: 1.4rem;
`;
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 2rem;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Column>
        <Logo />
        <Description>
          فروشگاه استار با بیش از ۵ سال سابقه ایجاد رضایت در مشتریان در حوضه
          پوشاک مد روز فعالیت می کند
        </Description>
      </Column>
      <Column>
        <HeadText>فروشگاه</HeadText>
        <SubText>همه محصولات</SubText>
        <SubText>بهترین برند ها</SubText>
        <SubText>تخفیف ها</SubText>
      </Column>
      <Column>
        <HeadText>دسته بندی ها</HeadText>
        <SubText>کژوال</SubText>
        <SubText>لباس کودک</SubText>
        <SubText>کت و شلوار</SubText>
      </Column>
      <Column>
        <HeadText>پشتیبانی</HeadText>
        <SubText>پرسش و پاسخ</SubText>
        <SubText>درباره ما</SubText>
        <SubText>قوانین</SubText>
      </Column>
      <Column>
        <HeadText>روش های پرداختی ما</HeadText>
        <IconWrapper>
          <BsPaypal fontSize={20} color="#0e6bed" />
          <BsFillCreditCard2BackFill fontSize={20} color="#949494" />
          <BsCashCoin fontSize={20} color="#c2a008" />
        </IconWrapper>
      </Column>
    </Wrapper>
  );
};

export default Footer;
