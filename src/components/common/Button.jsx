import { styled } from "styled-components";
import PropTypes from "prop-types";
import Loader from "./Loader";

Button.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  rest: PropTypes.array,
};
const Wrapper = styled.p`
  width: 100%;
  height: 45px;
  position: relative;
  cursor: ${(props) => (props.active ? "pointer" : "not-allowed")};
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c4cc3d2;
  color: ${(props) => (props.active ? "#ffffff" : "#dfdfdf")};
  box-shadow: 0 1px 5px #9b9b9b;
  &:active {
    box-shadow: 0 1px 5px #f6f6f6;
  }
  &:hover {
    /* background-color: ${(props) =>
      props.active ? "#1982dd" : "#2361d496"}; */
    background-color: #043ca5d2;
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
      {!active ? <Loader /> : <ButtonStyled>{children}</ButtonStyled>}
    </Wrapper>
  );
}

export default Button;
