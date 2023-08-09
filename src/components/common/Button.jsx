import { styled } from "styled-components";
import PropTypes from "prop-types";

Button.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  rest: PropTypes.array,
};
const Wrapper = styled.p`
  width: 100%;
  padding: 1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  background-color: ${(props) => (props.active ? "#2c92ea" : "#2361d496")};
  color: ${(props) => (props.active ? "#ffffff" : "#dfdfdf")};
  box-shadow: 0 1px 5px #9b9b9b;
  &:active {
    box-shadow: 0 1px 5px #f6f6f6;
  }
  &:hover {
    background-color: ${(props) => (props.active ? "#1982dd" : "#2361d496")};
  }
`;

const ButtonStyled = styled.button`
  width: 100%;
  background-color: transparent;
  outline: 0;
  border: 0;
  &:focus {
    outline: 0;
    border: 0;
  }
`;

function Button({ active, children, ...rest }) {
  return (
    <Wrapper {...rest} active={active}>
      <ButtonStyled >{children}</ButtonStyled>
    </Wrapper>
  );
}

export default Button;
