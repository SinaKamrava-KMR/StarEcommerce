import { motion } from "framer-motion";
import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "../../../components/common/Modal";
import OrderModal from "./OrderModal";
import { memo } from "react";
import { convertToPersianNumber } from "../../../utils/helper";

// import * as shamsi from 'shamsi-date-converter';
const TableRowStyle = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 2rem repeat(5, minmax(112px, 1fr));
  grid-auto-flow: column;
  column-gap: 2rem;
  align-items: center;
  text-align: center;
  padding: 1.6rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  @media (max-width: 950px) {
    text-align: start;
  }
`;

const SeeDetails = styled.button`
  background-color: #109ae4;
  border: 0;
  outline: 0;
  border-radius: 0.5rem;
  padding-block: 0.5rem;

  color: #fff;
  transition: all 0.2s ease;
  &:hover {
    background-color: #0d86c7;
  }
  &:focus {
    border: 0;
    outline: 0;
  }
`;


// eslint-disable-next-line react/display-name
const MotionRow = memo(({ delay, children, order,row }) => {
 
  const d= new Date(order.createdAt)
  let date = new Intl.DateTimeFormat('fa-IR').format(d)
  console.log(date);

  return (
    <TableRowStyle
      as={motion.div}
      transition={{
        delay: `${delay <= 9 ? `.${delay}` : 1}`,
        duration: 0.4,
      }}
      initial={{ y: 500 }}
      animate={{ y: 0 }}
    >
      <p>{row }</p>
      <p>سینا کامروا</p>
      <p>{convertToPersianNumber(order.totalPrice)} تومان</p>
      <p>{ date}</p>
      <p>{ convertToPersianNumber(order.products.length)}</p>
      {children}
    </TableRowStyle>
  );
});

function OrderRow({ delay,order,row }) {
  const [showModal, setShowModal] = useState(false);

 
  return (
    <>
      {showModal && (
        <Modal>
          <OrderModal onCloseModal={() => setShowModal(false)} />
        </Modal>
      )}

      <MotionRow delay={delay} order={order} row={row}>
        <SeeDetails onClick={() => setShowModal(true)}>برسی سفارش</SeeDetails>
      </MotionRow>
    </>
  );
}

MotionRow.propTypes = {
  delay: PropTypes.number,
  row: PropTypes.number,
  children: PropTypes.node,
  order: PropTypes.object,
};

OrderRow.propTypes = {
  delay: PropTypes.number,
  order: PropTypes.object,
  row: PropTypes.number,
};



export default OrderRow;
