import { styled } from "styled-components";

import PropTypes from "prop-types";

StateButton.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.string,
};
const Wrapper = styled.button`
  border: ${(props) =>
    props.variant === "cancel" ? "1px solid #dedede" : "0"};
  background-color: ${(props) =>
    props.variant === "cancel" ? "#fff" : "#306ef6"};
  color: ${(props) => (props.variant === "cancel" ? "#1f1f2c" : "#ffffff")};
  padding: 0.8rem 1.7rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  &:hover {
    background-color: ${(props) =>
      props.variant === "cancel" ? "#f2f2f2" : "#1c5ae1"};
  }
  &:focus {
    outline: 0;
  }
`;

function StateButton({ children, onClick, variant }) {
  return (
    <Wrapper onClick={onClick} variant={variant}>
      {children}
    </Wrapper>
  );
}

export default StateButton;
