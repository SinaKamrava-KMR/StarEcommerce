import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import AddProductFooter from "../../dashboard/components/addProduct/AddProductFooter";

const Wrapper = styled(Box)({
  width: "100%",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  padding: "0 1rem",
  paddingTop: "2.5rem",
  backgroundColor: "#f6f6f6",
  overflowY: "auto",
  gap: "2rem",

  /* width*/
  "&::-webkit-scrollbar": {
    width: "7px",
    height: "7px",
  },

  /* Track */
  "&::-webkit-scrollbar-track": {
    backgroundColor: "#d1d1d19a",
    borderRadius: "10px",
  },

  /* Handle */
  "&::-webkit-scrollbar-thumb ": {
    background: "#616264",
    borderRadius: "10px",
  },
});
const Container = styled(Box)({
  width: "100%",
  height: "500px",
  overflowY: "scroll",
  flex: 1,
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: " 1fr 300px",
  gridTemplateRows: "300px 1fr",
  /* width*/
  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width:800px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(auto-fill,minmax(300px,1fr))",
  },
});
const InfoContainer = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#e9f331",
  gridRow: "span 2",
  height: "500px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});
const MediaContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#31f385",
  "@media (max-width:800px)": {
    gridRow: "1/2",
  },
});
const VisibilyContainer = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#31aff3",
});

function AddProduct() {
  return (
    <Wrapper>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>
      <AddProductFooter />
      <Container>
        <InfoContainer>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
        </InfoContainer>
        <MediaContainer>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
        </MediaContainer>
        <VisibilyContainer>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
          <p>skjfhsfdj</p>
        </VisibilyContainer>
      </Container>
    </Wrapper>
  );
}

export default AddProduct;
