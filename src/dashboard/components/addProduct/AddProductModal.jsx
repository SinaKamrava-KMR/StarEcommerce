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
import { useDispatch } from "react-redux";
import { show } from "../../../redux/reducer/toast/toastSlice";

import Loading from "../../../components/common/Loading";

AddProductModal.propTypes = {
  oncloseModal: PropTypes.func,
  product: PropTypes.object,
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

function AddProductModal({ oncloseModal, product }) {
  const dispatch = useDispatch();
  const [medias, setMedias] = useState(product?.images ? product?.images : []);
  const [isLoading, setIsLoading] = useState(false);
  function handleSubmit(data, id) {
    setIsLoading(true);
    const service = new ProductServices();
    if (id === undefined) {
      //Add New Product
      service
        .add({ ...data, images: medias })
        .then((res) => {
          console.log(res);
          dispatch(
            show({
              message: "  محصول با موفقیت اضافه شد  ",
              status: "success",
            })
          );
        })
        .catch((error) => {
          dispatch(
            show({
              message: error.message,
              status: "error",
            })
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
      setMedias([]);
    } else {
      // Update Product
      setIsLoading(false);
      console.log(id, { ...data, images: medias });
    }

  }

  return (
    <Wrapper component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
      <CloseWrapper onClick={oncloseModal}>
        <HiOutlineXMark />
      </CloseWrapper>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>
      <Container>
        {isLoading && <Loading />}
        <InfoForm product={product} inModal={true} onSubmit={handleSubmit} />
        <ImageUploader medias={medias} setMedias={setMedias} />
      </Container>
    </Wrapper>
  );
}

export default AddProductModal;
