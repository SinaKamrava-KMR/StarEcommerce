import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { HiOutlineXMark } from "react-icons/hi2";
import Table from "../../../components/common/Table";
import OrderModalRow from "./OrderModalRow";
OrderModal.propTypes = {
  onCloseModal: PropTypes.func,
};

const Wrapper = styled(Box)`
  position: relative;
  background-color: #fff;
  width: 35%;
  height: 80%;
  z-index: 3000;
  border-radius: 0.7rem;
  box-shadow: 0 0 10px #7a7a7a;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;

  padding: 2rem 1rem;
 
  box-shadow: 0 0 10px #6c6c6c;
`;
const CloseWrapper = styled(Box)`
  position: absolute;
  left: 2rem;
  top: 2rem;
  cursor: pointer;
  font-size: 1.8rem;
`;

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding-inline: 2rem;
  border-top: 1px solid #ebebeb;
  border-bottom: 1px solid #ebebeb;
  padding-block: 1rem;
`;
const Row = styled(Box)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Tag = styled(Box)`
  background-color: #22d09c21;
  flex: 1;
  border-radius: 1.5rem;
  display: flex;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding-block: 0.2rem;
`;
const BtnWrapper = styled("button")`
  background-color: #1dba66;
  font-size: 1.5rem;
  color: #fff;
  outline: 0;
  border: 0;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-top: .5rem;
  &:hover{
    background-color: #0e9f52;
  }
  &:focus {
    border: 0;
    outline: 0;
  }
`;

const tabelHeader = ["ردیف", "کالا", "قیمت", "تعداد"];

function OrderModal({ onCloseModal }) {
  return (
    <Wrapper component={motion.div} initial={{ y: -100 }} animate={{ y: 0 }}>
      <CloseWrapper onClick={onCloseModal}>
        <HiOutlineXMark />
      </CloseWrapper>
      <Row>
        <Typography variant="content">بررسی سفارشات مشتری</Typography>
      </Row>
      <Container>
        <Row>
          <p>نام مشتری :</p>
          <p> سینا کامروا</p>
        </Row>
        <Row>
          <p> ادرس :</p>
          <p> مازندران, تنکابن ,کریم اباد</p>
        </Row>
        <Row>
          <p> تلفن :</p>
          <p> ۰۹۲۱۶۳۴۳۱۱۸ </p>
        </Row>
        <Row>
          <p> زمان تحویل :</p>
          <Tag>
            <p> ۱۲ خرداد ۱۴۰۲ ساعت ۱۳:۴۳ </p>
          </Tag>
        </Row>
        <Row>
          <p> زمان سفارش :</p>
          <Tag>
            <p> ۵ خرداد ۱۴۰۲ ساعت ۵:۰۸ </p>
          </Tag>
        </Row>
      </Container>
      <Table headerItems={tabelHeader}>
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
        <OrderModalRow />
      </Table>
    
      <BtnWrapper variant="contained"> تحویل داده شد</BtnWrapper>
    </Wrapper>
  );
}

export default OrderModal;
