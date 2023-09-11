import { styled } from "styled-components";

export const HeaderStyled = styled.header`
  padding-block: 10px;
  margin-inline: auto;
  display: grid;
  gap: 1.6rem;
  align-items: center;

  background-color: ${(props) =>
    props.position > 70 ? "#fff" : "transparent"};
  z-index: 99999;
  position: fixed;
  top: 0;
  left: 0rem;
  right: 0rem;
  padding: 1.2rem 1.5rem;
  grid-template-columns: repeat(auto-fill, maxmin(50px, 1fr));
  @media (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const BadgeIcon = styled.span`
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: #f85b5b;
  color: white;
  font-size: 12px;
  width: 16px;
  height: 16px;
  
  padding: 9px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  & p {
    margin-top: 2px;

  }
`;
export const IconWrapper = styled.div`
  position: relative;
`;

export const Row = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
  gap: 2rem;


`;

export const Flex1 = styled.div`
  flex: 1;

  @media (max-width: 1200px) {
    display: none;
  }
`;


export const SearchWrapper = styled.div`
    position: relative;
    
    flex: 1;
`
