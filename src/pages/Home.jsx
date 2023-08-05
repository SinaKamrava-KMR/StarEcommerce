import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HomeWrapper = styled.div`
height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <h1>صفحه اصلی فروشگاه</h1>
      <Link to="/products">دسته بندی محصولات</Link>
      <Link to="/product/glkggfmvb">رفتن به صفحه محصول  </Link>
    </HomeWrapper>
  );
}

export default Home;
