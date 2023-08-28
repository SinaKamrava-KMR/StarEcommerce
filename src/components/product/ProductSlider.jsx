import PropTypes from "prop-types";
import { styled } from "styled-components";
import Slider from "../slider/Slider";

const Wrapper = styled.div`
      min-width: 30%;
      background-color: #fe5c5c;
`

function ProductSlider({ images = [] }) {
  
  return (
    <Wrapper>
      <Slider>
        
      </Slider>
    </Wrapper>
  )
}
ProductSlider.propTypes = {
  images: PropTypes.array,
};
export default ProductSlider