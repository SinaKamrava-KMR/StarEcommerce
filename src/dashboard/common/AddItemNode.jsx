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
  onCreate,
}) {
  const [isAdding, setIsAdding] = useState(false);
  const [value, setValue] = useState("");
  const [iconMedia, setIconMedia] = useState(null);

  const handleUploadIcon = (e) => {
    const file = e.target.files[0];
    setIconMedia(file);
  };

  const handleClick = (e) => {
    e.stopPropagation()
    if (value !== "") {
      if (iconMedia !== null) {
        onCreate({ name: value, icon: iconMedia });
      } else {
        onCreate({ name: value });
      }
    }

    setIconMedia(null);
    setValue("");
    setIsAdding(false);
  };
  return (
    <Wrapper
      bgcolor={bgColor}
      onClick={(e) => {
        e.stopPropagation();
        setIsAdding(true);
      }}
    >
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
            ) : iconMedia !== null ? (
              <IconImg src={URL.createObjectURL(iconMedia)} />
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
          <IconWrapper onClick={handleClick} color="#4c4c4c">
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
  onCreate: PropTypes.func,
};

export default AddItemNode;
