import PropTypes from "prop-types";

import { styled } from "styled-components";
import { TbTrashFilled } from "react-icons/tb";
const Wrapper = styled.div`
  height: 3rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0 2rem;
  cursor: pointer;
  background-color: ${(props) => (props.active ? "#ff4141" : "#fe9595")};
  color: white;
  &:hover {
    background-color: ${(props) => (props.active ? "#ff2525" : "#fe9595")};
  }
  & > p:last-child {
    font-size: 1.3rem;
    margin-top: 5px;
  }
`;

const DeleteProductButton = ({ active = false, onClick }) => {
  return (
    <Wrapper active={active} onClick={onClick}>
      <TbTrashFilled />
      <p>حذف</p>
    </Wrapper>
  );
};

DeleteProductButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
};
export default DeleteProductButton;
