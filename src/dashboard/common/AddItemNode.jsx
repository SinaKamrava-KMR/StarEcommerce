import {
  HiMiniPhoto,
  HiMiniCheck,
  HiMiniPlus,
  HiMiniBolt,
} from "react-icons/hi2";

import PropTypes from "prop-types";
import { useState } from "react";
import {
  AddWrapper,
  Container,
  IconImg,
  IconLable,
  IconWrapper,
  Input,
  Wrapper,
} from "./AddItemNodeStyles";




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

AddItemNode.propTypes = {
  delay: PropTypes.number,
  title: PropTypes.string,
  bgColor: PropTypes.string,
  palceHolder: PropTypes.string,
  isSubCategory: PropTypes.bool,
};

export default AddItemNode;
