import { styled } from "styled-components";
import BannerSlider from "../components/home/BannerSlider";
import Brands from "../components/home/Brands";

import { Wrapper } from "../components/common/Wrapper";
import HomeCategories from "../components/home/HomeCategories";
import ProductsPreview from "../components/home/ProductsPreview";
import useProduct from "../hooks/useProduct";
import MultiProductsPreview from "../components/home/MultiProductsPreview";

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

        <ProductsPreview
          isLoading={isLoading}
          data={products?.data.products}
          title="لباس های کژوال"
        />
        <HomeCategories />
        <ProductsPreview
          isLoading={isLoading}
          data={products?.data.products}
          title="کت و شلوار"
        />
        <MultiProductsPreview/>
      </Wrapper>
    </HomeWrapper>
  );
}

export default Home;
