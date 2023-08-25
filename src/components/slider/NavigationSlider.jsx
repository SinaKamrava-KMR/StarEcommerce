import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import { styled } from "styled-components";
import PropTypes from "prop-types";
const Wrapper = styled.div`
  width: 100px;
  position: absolute;
  right: 10%;
  bottom: 10%;
  display: flex;
  align-items: center;
  gap: 2rem;
  & > * {
    cursor: pointer;
    color: #6f6f6f;
    transition: all 0.2s ease-in;
  }

  & > *:hover {
    transform: scale(1.4);
    font-weight: 800;
    color: #333;
  }
  & > *:active {
    transform: scale(1.1);
    font-weight: 800;
    color: #333;
  }
  z-index: 20;
`;

const NavigationSlider = ({ onLeft, onRight }) => {
  return (
    <Wrapper>
      <HiArrowLongRight onClick={onRight} fontSize={34} />

      <HiArrowLongLeft onClick={onLeft} fontSize={34} />
    </Wrapper>
  );
};

NavigationSlider.propTypes = {
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
};

export default NavigationSlider;
