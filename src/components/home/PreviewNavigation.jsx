import PropTypes from "prop-types";
import { styled } from "styled-components";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";
const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const IconContainer = styled.div`
  border: 1px solid #e6e6e6;
  background-color: #fcfcfc;
  &:hover{
    background-color: #f0f0f0;
  }
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .5rem 1rem;
  border-radius: 0.5rem;
  
`;

function PreviewNavigation({ onLeft, onRight }) {
  return (
    <Wrapper>
      <IconContainer onClick={onRight}>
        <HiArrowSmallRight fontSize={20} />
      </IconContainer>
      <IconContainer onClick={onLeft}>
        <HiArrowSmallLeft fontSize={20} />
      </IconContainer>
    </Wrapper>
  );
}

PreviewNavigation.propTypes = {
  onLeft: PropTypes.func,
  onRight: PropTypes.func,
};
export default PreviewNavigation;
