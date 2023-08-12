import { styled } from "styled-components";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
  @media (max-width: 600px) {
    flex-wrap: wrap;
    gap:2rem;
  }
`;

export default Row;
