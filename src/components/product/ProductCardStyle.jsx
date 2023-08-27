import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 40rem;
  border: 1px solid #d8d8d8;
  cursor: pointer;
  &:hover {
    background-color: #f5f5f5e4;
  }
  border-radius: 1rem;
  padding-bottom: 1.6rem;
  overflow: hidden;
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.5);
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
  overflow: hidden;
  cursor: pointer;
`;
export const PriceWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  color: #555;
`;
export const AddButton = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  border: 1px solid #b5b5b5;
  padding: 0.5rem 2rem;
  border-radius: 50px;
  background-color: #575757;
  color: #fff;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  &:hover {
    background-color: #484848;
  }
  &:active {
    background-color: #333;
  }
`;
export const Title = styled.p`
  overflow: hidden;
  text-align: center;
  width: 80%;
  & p {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-weight: bold;
  }
`;
