import { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi2";
import { styled } from "styled-components";
import PropTypes from "prop-types";
const LikeWrapper = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  width: 30px;
  height: 30px;
  z-index: 10;
  background-color: #dedede;
  color: #545454;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: #c3c3c3;
  }
`;
const LikeButton = ({ onLike, init = false }) => {
  const [isLike, setIsLike] = useState(init);
  const handleLike = (e) => {
    e.preventDefault();
    setIsLike((s) => !s);
    onLike(!isLike);
  };
  return (
    <LikeWrapper onClick={handleLike}>
      {isLike ? (
        <HiHeart fontSize={20} color="#f83d3d" />
      ) : (
        <HiOutlineHeart fontSize={20} />
      )}
    </LikeWrapper>
  );
};

LikeButton.propTypes = {
  onLike: PropTypes.func,
  init: PropTypes.bool,
};
export default LikeButton;
