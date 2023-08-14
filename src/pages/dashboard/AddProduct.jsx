import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

import ImageUploader from "../../dashboard/components/addProduct/ImageUploader";
import InfoForm from "../../dashboard/components/addProduct/InfoForm";
import { useState } from "react";

export const WrapperStyled = styled(Box)({
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

export const Container = styled(Box)({
  width: "100%",
  overflowY: "scroll",
  flex: 1,
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: " 1fr 350px",
  gridTemplateRows: " 1fr",
  /* width*/
  "&::-webkit-scrollbar": {
    display: "none",
  },

  "@media (max-width:800px)": {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(auto-fill,minmax(300px,1fr))",
  },
});

function AddProduct() {
  const [medias, setMedias] = useState([]);
  function handleClickSubmit(data) {
    console.log({...data,images:medias});
  }



  return (
    <WrapperStyled>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>
      
      <Container>
        <InfoForm onSubmit={handleClickSubmit} />

        <ImageUploader medias={medias} setMedias={setMedias}/>
      </Container>
    </WrapperStyled>
  );
}

export default AddProduct;
