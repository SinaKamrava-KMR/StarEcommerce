import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
  height: 50px;

  border-radius: 0.5rem;
  /* background: linear-gradient(to right, #3a95f0 , #0c71af ); */
  background: linear-gradient(to left, #2f2f2f, #5a5a5a);
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    right: -50px;
    top: 30px;
    width: 50px;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  }
`;
export const SubCategoryName = styled.div`
  flex: 1;
  color: #fff;
`;
export const SubCategoryInput = styled.input`
background-color: transparent;
border: 0;
border-bottom: 1px solid #fff;
outline: 0;
&:focus{
  border-bottom: 1px solid #fff;
  outline: 0;
}
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
  gap: 1rem;
  font-size: 22px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.isedit ? "1px dashed #fff" : "none")};
  }
`;
