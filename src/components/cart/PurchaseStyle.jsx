import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  margin-top: 10rem;
  padding-bottom: 2rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

`;
export const Title = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;
export const Row = styled.div`
  display: flex;
  gap: 3rem;
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  & > * {
    flex: 0;
  }
`;
export const DateWrapper = styled.div`
  position: relative;
`;
export const SubmitButton = styled.p`
  background-color: #161623;
  &:hover {
    background-color: #08080e;
  }
  color: white;
  border-radius: 0.6rem;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  padding-block: 1rem;
`;
export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
