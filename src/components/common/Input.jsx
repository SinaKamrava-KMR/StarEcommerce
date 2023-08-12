import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { forwardRef, useState } from "react";
import { keyframes, styled } from "styled-components";

Input.propTypes = {
  rightIconClick: PropTypes.func,
  label: PropTypes.string,
  rest: PropTypes.array,
  errorMessage: PropTypes.string,
  name: PropTypes.string,
  formValues: PropTypes.object,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  isEmpty: PropTypes.bool,
};

const waveAnimation = keyframes`
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-8px);
  }
  100% {
    transform: translateX(0);
  }
`;
const InputWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
const RightIconWrapper = styled.div`
  position: absolute;
  right: 1rem;
  margin-top: 0.3rem;
  color: ${(props) => (props.error ? "#fa8686" : "#858585")};
`;
const LeftIconWrapper = styled.div`
  position: absolute;
  cursor: pointer;
  left: 1.5rem;
  margin-top: 0.7rem;
  color: ${(props) => (props.error ? "#fa8686" : "#8d8d8d")};
`;

const StyledInput = styled.input`
  animation-name: ${(props) => (props.error ? waveAnimation : "none")};
  animation-duration: 0.2s;
  animation-timing-function: backwards;
  animation-iteration-count: 2;

  padding: 1rem;
  padding-right: ${(props) => (props.hasPadding ? "3.5rem" : "1.5rem")};
  border: 1px solid ${(props) => (props.error ? "#fa8686" : "#dddddd")};
  background-color: white;
  border-radius: 0.3rem;
  font-size: 16px;
  outline: 0;
  transition: all 0.3s ease-out;
  &:focus {
    border: 1px solid ${(props) => (props.error ? "#fa8686" : "#728bf9")};
    outline: 0;
  }
  color: #242424;
`;
const Label = styled.label`
  position: absolute;
  top: ${(props) => (props.focus ? "0" : props.isEmpty ? "50%" : "0")};
  right: ${(props) =>
    props.focus
      ? "1rem"
      : props.isEmpty
      ? props.hasPadding
        ? "3rem"
        : "1rem"
      : "1rem"};
  background-color: ${(props) =>
    props.focus ? "#fff" : props.isEmpty ? "transparent" : "#fff"};
  color: ${(props) =>
    props.focus
      ? props.error
        ? "#fe6b6b"
        : "#4162f6"
      : props.isEmpty
      ? "#979797"
      : props.error
      ? "#fe6b6b"
      : "#4162f6"};
  padding-inline: 1rem;
  transform: translateY(-50%);
  margin-bottom: 5px;
  font-size: 1.3rem;
  display: block;
  font-weight: 600;
  transition: all 0.1s ease-out;
  cursor: copy;
  z-index: 1000;
`;

const ErrorMessage = styled.p`
  color: #ff6b6b;
  position: absolute;
  bottom: -2rem;
  right: 1rem;
  font-size: 1.1rem;
`;

function Input(
  {
    label,
    errorMessage = "",
    leftIcon,
    rightIcon,
    rightIconClick,
    isEmpty,
    ...rest
  },
  ref
) {
  const [focus, setFocus] = useState(false);

  return (
    <InputWrapper>
      <RightIconWrapper error={errorMessage !== ""}>
        {rightIcon}
      </RightIconWrapper>
      <Label
        hasPadding={rightIcon !== undefined}
        onClick={() => setFocus(true)}
        isEmpty={isEmpty}
        error={errorMessage !== ""}
        focus={focus}
      >
        {" "}
        {label}
      </Label>
      <StyledInput
        hasPadding={rightIcon !== undefined}
        {...rest}
        error={errorMessage !== ""}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        ref={ref}
      />
      {errorMessage !== "" && (
        <ErrorMessage
          as={motion.p}
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          {errorMessage}
        </ErrorMessage>
      )}
      <LeftIconWrapper onClick={rightIconClick} error={errorMessage !== ""}>
        {leftIcon}
      </LeftIconWrapper>
    </InputWrapper>
  );
}

const ForwardedInput = forwardRef(Input);

export default ForwardedInput;
