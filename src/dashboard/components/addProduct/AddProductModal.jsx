import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Container } from "../../../pages/dashboard/AddProduct";
import InfoForm from "./InfoForm";
import ImageUploader from "./ImageUploader";
import { HiOutlineXMark } from "react-icons/hi2";
import PropTypes from "prop-types";
import { useState } from "react";
import ProductServices from "../../../services/api/productServices";

AddProductModal.propTypes = {
  oncloseModal:PropTypes.func
};


const Wrapper = styled(Box)`
  position: relative;
  background-color: #fff;
  width: 70%;
  height: 90%;
  border-radius: 0.7rem;
  box-shadow: 0 0 10px #7a7a7a;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 2rem 1rem;
  padding-bottom: 5rem;
`;
const CloseWrapper = styled(Box)`
  position: absolute;
  left: 2rem;
  top: 2rem;
  cursor: pointer;
  font-size: 1.8rem;
`;

function AddProductModal({ oncloseModal }) {
  const [medias, setMedias] = useState([]);
  function handleSubmit(data) {
    console.log({ ...data, images: medias });

    const service = new ProductServices();
    service.add({ ...data, images: medias }).then(res => {
      console.log(res);
    })

    setMedias([]);
  }
  
  return (
    <Wrapper component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
      <CloseWrapper onClick={oncloseModal}>
        <HiOutlineXMark />
      </CloseWrapper>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>
      <Container>
        <InfoForm inModal={true} onSubmit={handleSubmit} />

        <ImageUploader medias={medias} setMedias={setMedias} />
      </Container>
    </Wrapper>
  );
}

export default AddProductModal;
