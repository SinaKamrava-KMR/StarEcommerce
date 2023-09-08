import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  display: flex;

  align-items: center;
  justify-content: center;
`;
const Box = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;
const Image = styled.img`
  width: 300px;
  height: 300px;
`;



const Text = styled.p`
  font-size: 1.5rem;
  font-weight: 600;
`;



const HomeButton = styled.p`
  margin-top: 2rem;
  cursor: pointer;
  color: #1e2135;
  font-weight: bold;
  background-color: #e9e9e9;
  &:hover {
    background-color: #dadada;
  }
  padding: 1rem 5rem;
  border-radius: 1rem;
`;

function Empty() {
  return (
    <Wrapper>
      <Box>
        <Image src="/public/em1.png" />
        <Text>شما محصولی را به سبد خرید خود اضافه نکردید</Text>

        <Link to="/">
          <HomeButton>فروشگاه</HomeButton>
        </Link>
      </Box>
    </Wrapper>
  );
}

export default Empty;
