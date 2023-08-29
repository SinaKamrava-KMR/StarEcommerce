import PropTypes from "prop-types";
import { useState } from "react";
import { styled } from "styled-components";
import { HiPlus, HiOutlineMinus } from "react-icons/hi2";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
`;
const BtnWrapper = styled.div`
  cursor: ${(props) => (props.active ? "not-allowed" : "pointer")};
  background-color: ${(props) => (props.active ? "#e0e0e0" : "#f3f3f3")};
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #e1e1e1;
  }
`;
const CountText = styled.p`
  width: 7rem;
  height: 100%;
  text-align: center;
`;
const Title = styled.p`
  font-size: 1.3rem;
  font-weight: bold;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  align-self: flex-end;
  overflow: hidden;
`;
const Text = styled.p`
  color: #fd7d7d;
  font-size: 1.7rem;
`;

function ProductCount({ quantity = 0, onCount }) {
  const [count, setCount] = useState(1);

  const handleCountChange = (value) => {
    if (!(value > quantity) && value !== 0) {
      setCount(value);
      onCount(value);
    }
  };

  if (quantity === 0) return <Text>این محصول به اتمام رسید</Text>;

  return (
    <Wrapper>
      <Title> تعداد محصول</Title>

      <Row>
        <BtnWrapper
          onClick={() => handleCountChange(count + 1)}
          active={count === quantity}
        >
          <HiPlus />
        </BtnWrapper>
        <CountText>{count}</CountText>
        <BtnWrapper
          onClick={() => handleCountChange(count - 1)}
          active={count === 1}
        >
          <HiOutlineMinus />
        </BtnWrapper>
      </Row>
    </Wrapper>
  );
}

ProductCount.propTypes = {
  quantity: PropTypes.number,
  onCount: PropTypes.func,
};
export default ProductCount;
