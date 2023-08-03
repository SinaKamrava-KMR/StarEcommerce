import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <h1> هدر سایت فروشگاه</h1>
      </Link>
      <Link to="/dashboard/orders">رفتن به پنل مدیریت</Link>
    </HeaderStyled>
  );
}

export default Header;
