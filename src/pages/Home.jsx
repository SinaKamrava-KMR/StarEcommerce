import { styled } from "styled-components";
import BannerSlider from "../components/home/BannerSlider";
import Brands from "../components/home/Brands";

import { Wrapper } from "../components/common/Wrapper";
import HomeCategories from "../components/home/HomeCategories";
import CategoryPreview from "../components/home/CategoryPreview";
import useProduct from "../hooks/useProduct";

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
  const { isLoading, products } = useProduct();

  return (
    <HomeWrapper>
      <BannerSlider />
      <Wrapper>
        <Brands />
        {/* <Experiance /> */}

        <CategoryPreview
          isLoading={isLoading}
          data={products?.data.products}
          title="لباس های کژوال"
        />
        <HomeCategories />
        <CategoryPreview
          isLoading={isLoading}
          data={products?.data.products}
          title="کت و شلوار"
        />
      </Wrapper>
    </HomeWrapper>
  );
}

export default Home;
