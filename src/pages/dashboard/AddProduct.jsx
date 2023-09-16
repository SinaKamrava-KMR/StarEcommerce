import { useState } from "react";
import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";

import ImageUploader from "../../dashboard/components/addProduct/ImageUploader";
import InfoForm from "../../dashboard/components/addProduct/InfoForm";

export const WrapperStyled = styled(Box)`
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  padding-top: 2.5rem;
  background-color: #f6f6f6;
  overflow-y: auto;
  gap: 2rem;



  /* Scrollbar styles */
  scrollbar-width: thin;
  scrollbar-color: #616264 #d1d1d19a;

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #d1d1d19a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #616264;
    border-radius: 10px;




  }
`;

export const Container = styled(Box)`
  width: 100%;
  overflow-y: scroll;
  flex: 1;
  display: grid;
  gap: 1rem;




  
  grid-template-columns: 1fr 350px;
  grid-template-rows: 1fr;
  /* width*/
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const AddProduct = () => {
  const [medias, setMedias] = useState([]);

  const handleClickSubmit = (data) => {
    console.log({ ...data, images: medias });
  };

  return (
    <WrapperStyled>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>

      <Container>
        <InfoForm onSubmit={handleClickSubmit} />
        <ImageUploader medias={medias} setMedias={setMedias} />
      </Container>
    </WrapperStyled>
  );
};

export default AddProduct;
