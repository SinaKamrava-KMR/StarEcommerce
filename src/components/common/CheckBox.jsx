import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "styled-components";
import { GoHorizontalRule, GoCheck } from "react-icons/go";
const Wrapper = styled.div`
  border-radius: 0.55rem;
  width: 2rem;
  height: 2rem;
  border: 1px solid ${(props) => (props.checked ? "#ffffff" : "#d1d1d1")};
  background-color: ${(props) => (props.checked ? "#3d3d43" : "#fff")};
  color: ${(props) => (props.parentCheck ? "rgb(36, 36, 41)" : "#fff")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
`;

const CheckBox = ({ parentCheck = false, onCheck }) => {
  const [checked, setChecked] = useState(false);
  return (
    <Wrapper
      onClick={(e) => {
        e.stopPropagation()
        onCheck(!checked);
        setChecked((s) => !s);
      }}
      parentCheck={parentCheck}
      checked={checked}
    >
      {parentCheck && !checked && <GoHorizontalRule />}
      {checked && <GoCheck />}
    </Wrapper>
  );
};

CheckBox.propTypes = {
  onCheck: PropTypes.func,
  parentCheck: PropTypes.bool,
};
export default CheckBox;
