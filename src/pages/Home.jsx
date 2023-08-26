import { styled } from "styled-components";
import BannerSlider from "../components/home/BannerSlider";
import Brands from "../components/home/Brands";
import Experiance from "../components/home/Experiance";
import { Wrapper } from "../components/common/Wrapper";
import HomeCategories from "../components/home/HomeCategories";

const HomeWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <BannerSlider />
      <Wrapper>
        <Brands />
        <Experiance />
        <HomeCategories />
      </Wrapper>
    </HomeWrapper>
  );
}

export default Home;
