import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import FileInput from "./FileInput";
import UploadFileContent from "./UploadFileContent";
import { useEffect, useState } from "react";
import MediasWrapper from "./MediasWrapper";
import { FileToUrl } from "../../../utils/helper";

const MediaContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: ".8rem",
  padding: "1.5rem",
  "@media (max-width:800px)": {
    gridRow: "1/2",
  },
});

const MainMedia = styled(Box)(({ hasContnet }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "0.8rem",
  display: "flex",
  flex: "1",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  border: hasContnet ? "none" : "2px dashed #c5c5c5",
}));

const Image = styled("img")({
  width: "100%",
  height: "100%",
  maxHeight: "300px",
  borderRadius: "0.8rem",
  objectFit: "fit",
});
import PropTypes from "prop-types";

ImageUploader.propTypes = {
  medias: PropTypes.array,
  setMedias:PropTypes.func
};
function ImageUploader({medias, setMedias}) {

  const [activeImage, setActiveImage] = useState();

  function handleRemoveMedia(index) {
    setMedias((items) => items.filter((_, idx) => idx !== index));

    if (medias[index + 1]) {
      setActiveImage({
        file: FileToUrl(medias[index + 1]),
        index,
      });
    } else if (medias[index - 1]) {
      setActiveImage({
        file: FileToUrl(medias[index - 1]),
        index: index - 1,
      });
    } else {
      setActiveImage(null);
    }
  }

  function handleUploadFile(e) {
    const file = e.target.files[0];
    setMedias((files) => [...files, file]);
    setActiveImage({
      file: FileToUrl(file),
      index: medias.length,
    });
  }

  useEffect(() => {
    return () => {
      if (activeImage?.file) {
        URL.revokeObjectURL(activeImage.file);
      }
    };
  }, [activeImage]);

  return (
    <MediaContainer>
      <Typography variant="content">اپلود عکس های محصول</Typography>
      <MainMedia hasContnet={medias.length > 0}>
        {medias.length > 0 ? (
          <Image src={activeImage.file} />
        ) : (
          <>
            <FileInput onUpload={handleUploadFile} />
            <UploadFileContent />
          </>
        )}
      </MainMedia>

      <MediasWrapper
        removeMedia={handleRemoveMedia}
        activeIndex={activeImage?.index}
        onActive={setActiveImage}
        onUpload={handleUploadFile}
        medias={medias}
      />
    </MediaContainer>
  );
}

export default ImageUploader;
