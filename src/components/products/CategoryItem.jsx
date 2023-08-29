import { styled } from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { useState } from "react";

const Wrapper = styled.div``;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background-color: #f3f3f375;
  border-radius: 0.5rem;
  color: #838383;
  font-size: 1.4rem;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5;
  }
`;

const Title = styled.p`
  font-weight: 600;
  color: #545454;
`;
const IconWrapper = styled.div`
  color: #545454;
  transition: all 0.1s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "rotate(0)")};
`;

const CategoryItem = () => {
  const [select, setSelect] = useState(false);

  return (
    <Wrapper>
      <Row onClick={() => setSelect((s) => !s)}>
        <Title>دسته بندی ها</Title>
        <IconWrapper rotate={select}>
          <HiOutlineChevronLeft fontSize={23} />
        </IconWrapper>
      </Row>
    </Wrapper>
  );
};

export default CategoryItem;
