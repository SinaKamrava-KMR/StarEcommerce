import { keyframes, styled } from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  &:not(:first-child) {
    &::before {
      content: "";
      position: absolute;
      right: -20px;
      top: 30px;
      width: 50px;
      border-right: 1px solid #012e4a;
      border-bottom: 1px solid #012e4a;
    }
  }
`;
export const BoxClose = keyframes`
    0% {
    height: 150px;
  }
  
  100% {
    height: 0;
  }


`;
export const BoxOpen = keyframes`
  
  0% {
    height: 0;
  }
  
  100% {
    height: 150px;
  }

`;
export const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #2a2a2c, #222222);
  z-index: 10;
  position: relative;
  border-radius: 0.6rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;
`;
export const IconWrapper = styled.div`
  width: 35px;
  height: 100%;
  background-color: ${(props) => props.bgcolor};
  position: relative;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 1rem;
  font-size: 22px;
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.isedit ? "1px dashed #fff" : "none")};
  }
`;
export const CategoryName = styled.p`
  flex: 1;
  color: #fff;
`;
export const Box = styled.div`
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

  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    right: 13%;
    top: -50px;
    bottom: 20px;
    width: 50px;

    border: 0;
    border-right: 1px solid #ababab;
  }
`;
export const CategoryInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: 0;
  &:focus {
    border-bottom: 1px solid #fff;
    outline: 0;
  }
`;

export const IconLable = styled.label`
  position: absolute;
  inset: 0;
  background: transparent;
  border: 0;
  outline: 0;
  z-index: 20;
`;
export const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;