import { styled } from "styled-components";

export const Wrapper = styled.div`
  min-width: 350px;
  height: 420px;
  box-shadow: 0 0 7px #8e8e8e60;
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 1rem;
  border: ${(props) => (props.input ? "1px solid #e7e7e7" : "none")};
  gap: 2rem;
  color: ${(props) => (props.discount ? "#ff5b5b" : "#343436")};
  font-weight: bold;
  & p:last-child {
    color: ${(props) => (props.discount ? "#ff5b5b" : "#6c6c6c")};
  }
`;
export const DiscountInput = styled.input`
  flex: 1;
  outline: none;
  border: 0;
  font-size: 1.4rem;
  &::placeholder {
    color: #999;
  }
  &:focus {
    outline: none;
    /* border: 0; */
  }
`;
export const IconWrapper = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  font-size: 2rem;
  justify-content: center;
  background-color: #ff5b5b;
  cursor: pointer;
  transition: all 0.5rem ease-in;
  &:hover {
    background-color: #f63b3b;
  }
  color: #fff;
  border-radius: 0.4rem;
`;
export const SubmitButton = styled.div`
  background-color: #1e1d2a;
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  cursor: pointer;
  transition: all .5s ease;
  &:hover{
    background-color: #0f0e18;
  }
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
`;
