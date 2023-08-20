import { styled } from "styled-components"
import CategoryNode from "./CategoryNode"

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-self:center;
  gap: 1rem;
  position: relative;
  &::before{
    content: "";
    position:absolute;
    right: -20px;
    top: 20px;
    bottom: 30px;
    width: 50px;
    border-right: 1px solid #333;
    
    border-top: 1px solid #333;
  }
`
function TreeCategory() {
  return (
    <Wrapper>
      <CategoryNode/>
      <CategoryNode/>
      <CategoryNode/>
      <CategoryNode/>
      <CategoryNode/>


    </Wrapper>
  )
}

export default TreeCategory