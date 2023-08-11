import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import FileInput from "./FileInput";
import UploadFileContent from "./UploadFileContent";
import { useState } from "react";
import MediasWrapper from "./MediasWrapper";

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
  maxHeight: "250px",
  borderRadius: "0.8rem",
  objectFit: "fit",
});

function ImageUploader() {
  const [medias, setMedias] = useState([
    "/public/slider/fit.jpg",
    "/public/slider/fit.jpg",
    "/public/slider/user5.jpg",
  ]);

  const [activeImage, setActiveImage] = useState("/public/slider/user5.jpg");

  function handleRemoveMedia(index) {
    setMedias((items) => items.filter((_, idx) => idx !== index));
  }

  return (
    <MediaContainer>
      <Typography variant="content">اپلود عکس های محصول</Typography>
      <MainMedia hasContnet={medias.length > 0}>
        {medias.length > 0 ? (
          <Image src={activeImage} />
        ) : (
          <>
            <FileInput />
            <UploadFileContent />
          </>
        )}
      </MainMedia>

      <MediasWrapper
        removeMedia={handleRemoveMedia}
        activeMedia={activeImage}
        onActive={setActiveImage}
        medias={medias}
      />
    </MediaContainer>
  );
}

export default ImageUploader;
