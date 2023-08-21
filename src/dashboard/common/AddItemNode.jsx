import { styled } from "styled-components";
import {
  HiMiniPhoto,
  HiMiniCheck,
  HiMiniPlus,
  HiMiniBolt,
} from "react-icons/hi2";

import PropTypes from "prop-types";
import { useState } from "react";
AddItemNode.propTypes = {
  delay: PropTypes.number,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  palceHolder: PropTypes.string,
  isSubCategory: PropTypes.bool,
};
const Wrapper = styled.div`
  width: 300px;
  height: 50px;
  box-shadow: -1px 2px 10px #dadada;
  border-radius: 0.3rem;
  border-radius: 0.8rem;
  background: ${(props) => props.bgcolor};
  position: relative;
  border: 0;
  display: flex;
  color: #153253;
  align-items: center;
  gap: 1rem;

  cursor: pointer;
`;

const AddWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: center;
  gap: 2rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 16px;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem;
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 100%;
  background-color: transparent;
  position: relative;
  border-radius: 0.3rem;

  &:hover {
    background-color: #f3f3f3;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 22px;
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.hasborder ? "1px dashed #9d9d9d" : "none")};
  }
`;
const Input = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #595959;
  font-size: 14px;
  outline: 0;
  &:focus {
    border-bottom: 1px solid #717171;
    outline: 0;
  }
`;

const IconLable = styled.label`
  position: absolute;
  inset: 0;
  background: transparent;
  border: 0;
  outline: 0;
  z-index: 20;
`;
const IconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

function AddItemNode({
  palceHolder,
  title,
  bgColor = "#ffffff",
  isSubCategory = false,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState("");
  const [iconMedia, setIconMedia] = useState("");

  function handleUploadIcon(e) {
    const file = e.target.files[0];
    setIconMedia(URL.createObjectURL(file));
  }
  return (
    <Wrapper bgcolor={bgColor} onClick={() => setIsAdding(true)}>
      {!isAdding ? (
        <AddWrapper>
          <p>{title}</p>
          <HiMiniPlus fontSize={22} />
        </AddWrapper>
      ) : (
        <Container>
          <IconWrapper hasborder={!isSubCategory} color="#4c4c4c">
            {isSubCategory ? (
              <HiMiniBolt />
            ) : iconMedia !== "" ? (
              <IconImg src={iconMedia} />
            ) : (
              <HiMiniPhoto />
            )}

            {!isSubCategory && (
              <>
                <input
                  id="icon_input"
                  type="file"
                  onChange={handleUploadIcon}
                  hidden
                />
                <IconLable htmlFor="icon_input" />
              </>
            )}
          </IconWrapper>
          <Input
            placeholder={palceHolder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <IconWrapper color="#4c4c4c">
            <HiMiniCheck />
          </IconWrapper>
        </Container>
      )}
    </Wrapper>
  );
}

export default AddItemNode;
