import { styled } from "styled-components";
import BannerSlider from "../components/home/BannerSlider";
import Brands from "../components/home/Brands";

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
      <Brands />
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
      <p>xkfsjklf</p>
    </HomeWrapper>
  );
}

export default Home;
