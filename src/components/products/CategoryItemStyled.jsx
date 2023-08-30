import { styled } from "styled-components";

export const Wrapper = styled.div`

  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background-color: #f6f6f6;
  border-radius: 0.5rem;
  color: #838383;
  font-size: 1.4rem;
  /* position: sticky; */
  z-index: 10;
  /* top: 0; */
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
`;

export const Title = styled.p`
  font-weight: 600;
  font-size: 1.4rem;
  color: #545454;
`;
export const IconWrapper = styled.div`
  color: #545454;
  transition: all 0.1s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "rotate(0)")};
`;
export const Container = styled.div`
max-height: 300px;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #ffffff9a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #f1efef;
    border-radius: 10px;
  }
`;
