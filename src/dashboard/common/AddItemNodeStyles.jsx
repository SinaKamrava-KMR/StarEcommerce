import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 50px;
  box-shadow: -1px 2px 10px #dadada;
  border-radius: 0.3rem;
  border-radius: 0.8rem;
  background: ${(props) => props.bgcolor};
  position: relative;
  border: 0;
  display: flex;
  color: #153253;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

export const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  gap: 2rem;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem;
`;

export const IconWrapper = styled.div`
  width: 40px;
  height: 100%;
  background-color: transparent;
  position: relative;
  border-radius: 0.3rem;

  &:hover {
    background-color: #f3f3f3;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 22px;
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.hasborder ? "1px dashed #9d9d9d" : "none")};
  }
`;
export const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #595959;
  font-size: 14px;
  outline: 0;
  &:focus {
    border-bottom: 1px solid #717171;
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
// export const IconImg = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;