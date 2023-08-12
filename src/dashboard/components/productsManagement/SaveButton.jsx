import { styled } from "styled-components"

const Wrapper = styled.button`
  background-color:${props=>props.active ?"#3198f2":"#565b60"};
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  color: #eee;
  padding: 0.5rem 1.5rem;
  cursor: ${props=>props.active ?"pointer":"not-allowed"};
  &:focus{
    outline: 0;
    border: 0;
  }

`



function SaveButton() {
  return (
    <Wrapper active={true}>
        ذخیره
    </Wrapper>
  )
}

export default SaveButton