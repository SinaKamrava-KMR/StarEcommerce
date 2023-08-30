import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 3rem;
`;

const Title = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: #434343;
`;

const PriceRangeWrapper = styled.div`
  width: 100%;
  height: 8px;
  position: relative;
  background-color: #ebebeb;
  border-radius: 5rem;
`;
const Progress = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  height: 100%;
  background-color: #797979;
  border-radius: 5rem;
`;

const PriceRangeInput = styled.input`
  border-radius: 3px;
  outline: none;
  position: absolute;
  left: -5px;
  top: 50%;
  transform: translateY(-50%);
  width: 101%;
  appearance: none;
  pointer-events: none;
  background: none;

  &:focus {
    outline: 0;
    border: 0;
  }

  &::-webkit-slider-thumb {
    appearance: none;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: #1a1a30;
    pointer-events: auto;
    cursor: pointer;
  }

  &::-moz-range-thumb {
    appearance: none;
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 50%;
    background-color: #1a1a30;
    pointer-events: auto;
    cursor: pointer;
  }
`;

const max = 10000000;

const PriceRangeComponent = () => {
  const [maxValue, setMaxValue] = useState(500000);
  const [minValue, setMinValue] = useState(0);

  const handleChangeMax = (e) => {
    if (e.target.value > minValue) {
      setMaxValue(e.target.value);
    }
  };

  const handleChangeMin = (e) => {
    if (e.target.value < maxValue) {
      setMinValue(e.target.value);
    }
  };

  const progressWidth = ((maxValue - minValue) / max) * 100;

  return (
    <Wrapper>
      <Title>بازه ی قیمت</Title>
      <PriceRangeWrapper>
        <Progress
          style={{
            left: `${(minValue / max) * 100}%`,
            right: `${(minValue / max) * 100}%`,
            width: `${progressWidth}%`,
          }}
        />
        <PriceRangeInput
          value={maxValue <= minValue ? minValue : maxValue}
          onChange={handleChangeMax}
          type="range"
          min="0"
          max={max}
        />
        <PriceRangeInput
          value={minValue >= maxValue ? maxValue : minValue}
          onChange={handleChangeMin}
          type="range"
          min="0"
          max={max}
        />
      </PriceRangeWrapper>
    </Wrapper>
  );
};

export default PriceRangeComponent;
