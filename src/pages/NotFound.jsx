import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & a {
    color: var( --color-indigo-700);
  }
`;

function NotFound() {
  return (
    <Container>
      <h2>صفحه ی مورد نظر یافت نشد</h2>
      <Link to="/">بازگشت به سایت</Link>
    </Container>
  );
}

export default NotFound;
