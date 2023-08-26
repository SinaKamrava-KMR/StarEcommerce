import { styled } from "styled-components";

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  margin-inline: auto;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
`;

export const SeeMore = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 31% 69% 23% 77% / 66% 28% 82% 24%;

  position: absolute;
  bottom: 14%;
  right: 20%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  z-index: 20;
  transition: all 0.5s ease-in;
  background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
  &:hover {
    background-image: linear-gradient(120deg, #e85ef8 0%, #f94059 100%);
  }
`;

export const DiscountAd = styled.p`
  width: 60px;
  height: 60px;
  border-radius: 31% 69% 23% 77% / 66% 18% 82% 34%;

  position: absolute;
  top: 20%;
  left: 10%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);
`;
