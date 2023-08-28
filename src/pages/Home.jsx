import { styled } from "styled-components";
import BannerSlider from "../components/home/BannerSlider";
import Brands from "../components/home/Brands";

import { Wrapper } from "../components/common/Wrapper";
import HomeCategories from "../components/home/HomeCategories";
import ProductsPreview from "../components/home/ProductsPreview";
import useProduct from "../hooks/useProduct";
import MultiProductsPreview from "../components/home/MultiProductsPreview";
import Experiance from "../components/home/Experiance";
import { useSelector } from "react-redux";

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
  const { isLoading, products } = useProduct(1, 1000);
  const categories = useSelector((state) => state.categories.categories);
  const wishList = useSelector((state) => state.wishlist.products);
  return (
    <HomeWrapper>
      <BannerSlider />
      <Wrapper>
        <Brands />

        {/* <Experiance /> */}

        <ProductsPreview
          isLoading={isLoading}
          data={products?.data.products}
          categoryId={categories?.at(-1)?._id}
          title="لباس های کژوال"
          wishList={wishList}
        />
        <HomeCategories />
        <ProductsPreview
          isLoading={isLoading}
          data={products?.data.products}
          categoryId={categories?.at(1)?._id}
          title="کت و شلوار"
          wishList={wishList}
        />
        <Experiance />
        <MultiProductsPreview wishList={wishList} />
        <ProductsPreview
          isLoading={isLoading}
          data={products?.data.products}
          wishList={wishList}
          categoryId={categories?.at(0)?._id}
          title="لباس زنانه"
        />
      </Wrapper>
    </HomeWrapper>
  );
}

export default Home;
