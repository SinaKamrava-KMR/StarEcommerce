import PropTypes from "prop-types";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  &:hover{
    
    transform: scale(1.3);
}
`;
const Shape = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 1rem;
  background-color: #e6e6e6a1;
`;
const Logo = styled.img`
  z-index: 10;
  width: 50px;
  height: 50px;
  object-fit: cover;
`;

const Brand = ({ brand }) => {
  return (
    <Link to={`/products?brand=${brand.brand}`}>
      <Wrapper>
      <Logo src={brand.src} />
      <Shape color={brand.color} />
    </Wrapper>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
