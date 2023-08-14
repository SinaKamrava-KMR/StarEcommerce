import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { keyframes, styled } from "styled-components";

Toast.propTypes = {
  message: PropTypes.string,
  status: PropTypes.string,
};

const keyFram = keyframes`
   from {
    right: 0%;
  }

  to {
    right: 100%;
  }

`;

const Wrapper = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 300px;
  height: 60px;
  background-color: #fff;
  padding-inline: 1rem;
  box-shadow: 0 0 10px #d9d9d9;
  border-radius: 0.5rem;
  color: ${(props) => (props.status === "error" ? "#ff5e5e" : "#1fc46f")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .1s linear;
`;

const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  animation: ${keyFram} 5s forwards;
  background-color: ${(props) =>
    props.status === "error" ? "#ff5e5e" : "#1fc46f"};
`;
const LineBackDrop = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #dbdbdb;
`;

function Toast({ message, status }) {
  const toastRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      toastRef.current.style.transform = "translateX(200%)";
    }, 5000);
  }, []);

  return createPortal(
    <Wrapper
      ref={toastRef}
      as={motion.div}
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{}}
      status={status}
    >
      <LineBackDrop />
      <Line status={status} />
      {message}
    </Wrapper>,
    document.body
  );
}

export default Toast;
