import PropTypes from "prop-types";
import { styled } from "styled-components"

const Wrapper = styled.button`
  background-color:${props=>props.active ?"#3198f2":"#8ac8fb"};
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  color: #eee;
  padding: 0.5rem 3rem;
  cursor: ${props=>props.active ?"pointer":"not-allowed"};
  &:focus{
    outline: 0;
    border: 0;
  }

`
SaveButton.propTypes = {
  onClick: PropTypes.func,
  active: PropTypes.bool,
};


function SaveButton({active,onClick}) {
  return (
    <Wrapper onClick={onClick} active={active}>
        ذخیره
    </Wrapper>
  )
}

export default SaveButton