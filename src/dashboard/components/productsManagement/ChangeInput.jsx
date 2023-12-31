import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import { HiOutlineXMark } from "react-icons/hi2";

ChangeInput.propTypes = {
  onChange: PropTypes.func,
  onClose: PropTypes.func,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  isSaved: PropTypes.bool,
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;
`;
const Field = styled.p`
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
  border-radius: 0.5rem;
  padding-block: 0.5rem;
  &:hover {
    background-color: #f2f2f2;
  }
`;
const Input = styled.input`
  outline: 0;
  border: 0;
  background-color: transparent;
  border-bottom: 1px solid #cacaca;
  &:focus {
    outline: 0;
  }
`;
const CloseWrapper = styled.div`
  color: #f85a5a;
  font-size: 1.5rem;
  cursor: pointer;
  margin-top: 1.3rem;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;

function ChangeInput({ defaultValue, value, onChange, onClose, isSaved }) {
  const [showInput, setShowInput] = useState(false);
  // const [input, setInput] = useState(value);

  function handleDubbleClick(e) {
    if (e.detail === 2) {
      setShowInput(true);
    }
  }

  function handleClose() {
    setShowInput(false);
    onClose();
    // setInput(value);
  }
  function handleEsc(e) {
    if (e.code === "Escape") {
      setShowInput(false);
      onClose();
      // setShowInput(false);
      // setInput(value);
    }
  }

  useEffect(() => {
    if (isSaved) {
      setShowInput(false);
    }
  }, [isSaved]);

  return (
    <Wrapper>
      {!showInput ? (
        <Field onClick={handleDubbleClick}>
          {isSaved && value ? value : defaultValue}
        </Field>
      ) : (
        <>
          <Input
            type="number"
            value={value === undefined ? defaultValue : value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleEsc}
          />
          <CloseWrapper onClick={handleClose}>
            <HiOutlineXMark />
          </CloseWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default ChangeInput;
