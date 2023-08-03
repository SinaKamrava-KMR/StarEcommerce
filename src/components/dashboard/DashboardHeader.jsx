import { Link } from "react-router-dom";
import { styled } from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function DashboardHeader() {
  return (
    <HeaderStyled>
      <h1>پنل مدیریت فروشگاه</h1>
      <Link to="/">بازگشت به فروشگاه</Link>
    </HeaderStyled>
  );
}

export default DashboardHeader;
