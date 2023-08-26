import { styled } from "styled-components";
import PropTypes from "prop-types";

const SliderCircleWrapper = styled.div`
  width: ${(props) => (props.expand ? "100%" : `350px`)};
  height: ${(props) => (props.expand ? "100%" : `350px`)};
  border-radius: ${(props) =>
    props.expand ? 0 : ` 31% 69% 23% 77% / 66% 18% 82% 34%`};
  margin-inline: auto;
  transition: all 0.3s ease-in-out;
  overflow: hidden;
  position: absolute;
  right: ${(props) => (props.expand ? 0 : `16%`)};
  bottom: ${(props) => (props.expand ? 0 : `20%`)};
  background-color: ${(props) => props.color};
  /* background-image: linear-gradient(to right, #fdb4c166 0%, #fba3b466 19%, #ffb4b867 60%, #ffcbc35b 100%); */
`;

const SliderCircle = ({ expand, color }) => {
  return (
    <SliderCircleWrapper
      color={`${color}37`}
      expand={expand}
    ></SliderCircleWrapper>
  );
};

SliderCircle.propTypes = {
  color: PropTypes.string,
  expand: PropTypes.bool,
};

export default SliderCircle;
