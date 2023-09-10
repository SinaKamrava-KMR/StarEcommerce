import PropTypes from "prop-types";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  left: 10%;
  bottom: 10%;
  color: #fff;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  @media (max-width: 1000px) {
   display: none;
  }
`;

const Circle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${(props) => (props.active ? props.color : "#9f9f9f")};
  transform: ${props=>props.active?`scale(1.5)`:"none"};
  border-radius: 50%;
  transition: all 0.5s ease-in;
`;

const PaginationSlider = ({ activeIndex, length, colors = [] }) => {
  return (
    <Wrapper>
      {Array.from({ length }).map((_, i) =>
        activeIndex === i ? (
          <Circle key={i} active color={colors[i]} />
        ) : (
          <Circle key={i} />
        )
      )}
    </Wrapper>
  );
};

PaginationSlider.propTypes = {
  activeIndex: PropTypes.number,
  length: PropTypes.number,
  colors: PropTypes.array,
};

export default PaginationSlider;
