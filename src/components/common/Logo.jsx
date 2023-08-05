import { Link } from "react-router-dom";
import { styled } from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  gap: 0.2rem;
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
  font-family: 'Lobster', cursive;
  margin-bottom: .8rem;
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
        <LogoText>Star</LogoText>
      </LogoWrapper>
    </Link>
  );
}

export default Logo;
