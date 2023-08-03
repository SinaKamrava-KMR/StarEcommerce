import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Home() {
  return (
    <HomeWrapper>
      <Link to="/products">دسته بندی محصولات</Link>
      <Link to="/product/glkggfmvb">محصول مورد نظر</Link>
    </HomeWrapper>
  );
}

export default Home;
