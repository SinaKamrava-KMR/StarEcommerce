import { styled } from "styled-components";
import PropTypes from "prop-types";

const SliderCircleWrapper = styled.div`
  width: ${(props) => (props.expand ? "100%" : `350px`)};
  height: ${(props) => (props.expand ? "100%" : `350px`)};
  border-radius: ${(props) =>
    props.expand ? 0 : ` 31% 69% 23% 77% / 66% 18% 82% 34%
                    `};
  margin-inline: auto;
  transition: all .3s ease-in-out;
  overflow: hidden;
  position: absolute;
  right: ${(props) => (props.expand ? 0 : `20%`)};
  bottom: ${(props) => (props.expand ? 0 : `20%`)};
  background-color: #d5fffea1;
  /* background-image: linear-gradient(to right, #fdb4c166 0%, #fba3b466 19%, #ffb4b867 60%, #ffcbc35b 100%); */
`;

const SliderCircle = ({ expand }) => {
  return (
    <SliderCircleWrapper expand={expand}>
     
    </SliderCircleWrapper>
  );
};

SliderCircle.propTypes = {
  onSlideChange: PropTypes.func,
  onActiveSlide: PropTypes.func,
  effect: PropTypes.string,
  autoPlay: PropTypes.object,
  expand: PropTypes.bool,
};

export default SliderCircle;
