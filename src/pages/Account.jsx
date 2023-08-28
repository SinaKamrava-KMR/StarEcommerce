import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const AccountStyle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

function Account() {
  const wishlist = useSelector((state) => state.wishlist.products);
  console.log(wishlist);
  return (
    <AccountStyle>
      <h1>صفحه پروفایل و تنظیمات کاربر</h1>
      <Link to="/">بازگشت به صفحه اصلی</Link>
    </AccountStyle>
  );
}

export default Account;
