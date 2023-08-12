import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

const Container = styled(Box)`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 85%;
`;

function UploadFileContent() {
  return (
    <Container>
      <PhotoLibraryIcon sx={{fontSize:"3rem",color:"#999"}} />
      <Typography variant="content_li">
        عکس محصولات خود را اپلود کنید
      </Typography>
      <Typography variant="sub_content">
        {" "}
        شما میتوانید حداکثر ۴ عکس اضافه کنید و حجم هر عکس باید حداکثر ۱ مگابایت
        باشد{" "}
      </Typography>
    </Container>
  );
}

export default UploadFileContent;
