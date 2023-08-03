import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;
const ImageWrapper = styled.div`
  width: 3.5rem;

`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const LogoText = styled.p`
  font-size: 2.5rem;
  font-weight: bold;
  font-family: yekan;
  @media (max-width:700px) {
    display: none;
  }
`;

function Logo() {
  return (
    <Link to="/">
      <LogoWrapper>
        <ImageWrapper>
          <Image src="/public/logo.png" alt="star logo" />
        </ImageWrapper>
        <LogoText>استارشاپ</LogoText>
      </LogoWrapper>
    </Link>
  );
}

export default Logo;
