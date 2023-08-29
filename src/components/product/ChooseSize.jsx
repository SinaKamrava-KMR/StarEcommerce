import { useState } from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
const Title = styled.p`
  font-size: 1.4rem;
  color: #333;
  font-weight: bold;
`;

const SizeWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;
const Size = styled.div`
  border: 1px solid #bababa;
  cursor: pointer;
  font-size: 1.4rem;
  background-color: ${(props) => (props.active ? "#fe870f" : "#fff")};
  color: ${(props) => (props.active ? "#ffffff" : "#2c2c2c")};
  border-radius: 0.5rem;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const sizes = ["XS", "S", "M", "L", "XL"];

const ChooseSize = () => {
  const [active, setActive] = useState("S");
  return (
    <Wrapper>
      <Title>سایز خودتونو انتخاب کنید</Title>
      <SizeWrapper>
        {sizes.map((item, i) => {
          return (
            <Size
              active={active === item}
              onClick={() => setActive(item)}
              key={i}
            >
              {item}
            </Size>
          );
        })}
      </SizeWrapper>
    </Wrapper>
  );
};

export default ChooseSize;
