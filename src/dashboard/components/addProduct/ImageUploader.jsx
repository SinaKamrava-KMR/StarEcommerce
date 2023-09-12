import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import FileInput from "./FileInput";
import UploadFileContent from "./UploadFileContent";
import { useState } from "react";
import MediasWrapper from "./MediasWrapper";
import { FileToUrl } from "../../../utils/helper";

const MediaContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  position:"relative",
  gap: "2rem",
  backgroundColor: "#ffffff",
  borderRadius: ".8rem",
  padding: "1.5rem",
  "@media (max-width:800px)": {
    gridRow: "1/2",
  },
});
const Error = styled(Box)`
  font-size: 1.3rem;
  color: #fa7c7c;
  position: absolute;
  top: 25%;
  left: 0;
  right: 0;
  text-align: center;

`;

const MainMedia = styled(Box)(({ hasContnet,error }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: "0.8rem",
  display: "flex",
  flex: "1",
  overflow: "hidden",
  alignItems: "center",
  justifyContent: "center",
  border: hasContnet ? "none" : error?"2px dashed #fc8787":"2px dashed #c5c5c5",
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
  setMedias: PropTypes.func,
  error: PropTypes.bool,
};
// ImageUploader.propTypes = {
//   medias: PropTypes.array,
//   setMedias: PropTypes.func,
//   error: PropTypes.bool,
// };
function ImageUploader({ error,medias, setMedias }) {
  const initUrl =
    medias.length > 0
      ? `http://localhost:8000/images/products/images/${medias.at(-1)}`
      : null;

  const [activeImage, setActiveImage] = useState({
    index: medias?.length - 1,
    file: initUrl,
  });
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

  // useEffect(() => {
  //   return () => {
  //     if (activeImage?.file) {
  //       URL.revokeObjectURL(activeImage.file);
  //     }
  //   };
  // }, [activeImage]);

  return (
    <MediaContainer>
      {error && <Error>
          لطفا برای محصول خود عکس انتخاب کنید
      </Error>}

      



      <Typography variant="content">اپلود عکس های محصول</Typography>
      <MainMedia hasContnet={medias.length > 0} error={error}>
        {medias.length > 0 ? (
          <Image src={activeImage?.file} />
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
