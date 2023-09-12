import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { ImageList, ImageListItem } from "@mui/material";
import PropTypes from "prop-types";
import FileInput from "./FileInput";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";
import { FileToUrl } from "../../../utils/helper";
MediasWrapper.propTypes = {
  onActive: PropTypes.func,
  onUpload: PropTypes.func,
  removeMedia: PropTypes.func,
  medias: PropTypes.array,
  activeIndex: PropTypes.number,
};

const MediasWrapperStyled = styled(ImageList)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;
const ImageItem = styled(ImageListItem)(({ isActive }) => ({
  width: "25%",
  display: "flex",
  borderRadius: " 0.9rem",
  gap: "1rem",


  overflow: "hidden",
  cursor: "pointer",
  position: "relative",
  border: isActive ? "2px solid #3378f8" : "2px solid transparent",
}));
const Image = styled("img")`
  width: 100%;
  height: 60px;
  border-radius: 0.5rem;
  object-fit: cover;
`;
const UploadWrapper = styled(Box)`
  width: 25%;
  height: 100%;
  border-radius: 0.5rem;
  position: relative;


  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed #999;
`;
const RemoveBtn = styled(Box)`
  width: 15px;
  height: 15px;
  background-color: #ff5353;
  color: #ffffff;
  border-radius: 50%;

  
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 1rem;
  position: absolute;
  top: 2px;
  right: 2px;
  cursor: pointer;
`;

function MediasWrapper({
  onActive,
  medias,
  activeIndex,
  removeMedia,
  onUpload,
}) {
  function handleRemove(e, idx) {
    e.stopPropagation()
    removeMedia(idx)
  }

  return (
    <MediasWrapperStyled>
      {medias.map((item, idx) => (
        <ImageItem
          isActive={activeIndex === idx}
          onClick={() =>  onActive({ file: FileToUrl(item), index: idx })}
          key={idx}
        >
          <Image src={FileToUrl(item)} />
          <RemoveBtn onClick={(e) => handleRemove(e,idx)}>
            <MinimizeIcon />
          </RemoveBtn>
        </ImageItem>
      ))}

      {medias.length > 0 && medias.length < 4 && (
        <UploadWrapper>
          <AddIcon sx={{ fontSize: "1.8rem", color: "#999" }} />
          <FileInput onUpload={onUpload} />
        </UploadWrapper>
      )}
    </MediasWrapperStyled>
  );
}

export default MediasWrapper;
