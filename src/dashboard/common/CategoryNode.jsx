import { useState } from "react";
import SubcategoryNode from "./SubcategoryNode";
import { keyframes, styled } from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  &:not( :first-child) {
    &::before {
      content: "";
      position: absolute;
      right: -20px;
      top: 30px;
      width: 50px;
      border-right: 1px solid #333;
      border-bottom: 1px solid #333;
    }
  }
`;
const BoxClose = keyframes`
    0% {
    height: 200px;
  }
  
  100% {
    height: 0;
  }


`;
const BoxOpen = keyframes`
  
  0% {
    height: 0;
  }
  
  100% {
    height: 200px;
  }

`;
const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  background-color: #8ee1ff;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Box = styled.div`
  width: 180%;
  animation-name: ${(props) => (props.isopen ? BoxOpen : BoxClose)};
  animation-duration: 0.1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
 
  padding-right: 40%;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: -100;
  gap: 1rem;


  &::before {
    content: "";
    position: absolute;
    right:13%;
    top: -50px;
    bottom: 20px;
    width: 50px;

    border: 0;
      border-right: 1px solid #ababab;
    
  }
`;

function CategoryNode() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <TitleBox onClick={() => setIsOpen((p) => !p)}>Category</TitleBox>
      <Box isopen={isOpen}>
        {isOpen && (
          <>
            <SubcategoryNode delay={0} />
            <SubcategoryNode delay={0.1} />
            <SubcategoryNode delay={0.2} />
            <SubcategoryNode delay={0.3} />
          </>
        )}
      </Box>
    </Wrapper>
  );
}

export default CategoryNode;
