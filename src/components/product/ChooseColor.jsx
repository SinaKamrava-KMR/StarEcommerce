import { useState } from "react";
import PropTypes from "prop-types";
import { styled } from "styled-components";
import { HiCheck } from "react-icons/hi2";
const Wrapper = styled.div`
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Title = styled.p`
  font-size: 1.4rem;
  color: #333;
  font-weight: bold;
`;

const ColorsWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  position: relative;
`;

const Color = styled.div`
  cursor: pointer;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  color: #2d2d2d;
  align-items: center;
  justify-content: center;
  & > * {
    z-index: 10;
    font-size: 2rem;
  }
`;

const colors = ["#3f96ff", "#fd6e6e", "#43d089", "#f1e55f", "#a9a9a9"];

function ChooseColor({ onColor }) {
  const [active, setActive] = useState("#3f96ff");

  return (
    <Wrapper>
      <Title>رنگ موردنظر خودتونو انتخاب کنید</Title>

      <ColorsWrapper>
        {colors.map((color, i) => {
          return (
            <Color
              key={i}
              color={color}
              onClick={() => {
                onColor(color);
                setActive(color);
              }}
            >
              {color === active && <HiCheck />}
            </Color>
          );
        })}
      </ColorsWrapper>
    </Wrapper>
  );
}

ChooseColor.propTypes = {
  onColor: PropTypes.func,
};
export default ChooseColor;
