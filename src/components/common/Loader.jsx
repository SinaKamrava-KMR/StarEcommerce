import { motion } from "framer-motion";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
position: absolute;
top: 50%;
transform: translateY(-50%);
  
`;

const loadingContainer = {
  width: "4rem",
  height: "2.2rem",
  display: "flex",
  justifyContent: "space-around",
};
const loadingCircle = {
  display: "block",
  width: ".8rem",
  height: ".8rem",
  background: "#fff",
  borderRadius: "0.5rem",
  transition:"all .1s ease-in-out"
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "100%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: "easeInOut",
  repeat: Infinity,
  repeatDelay: .4 
};

const Loader = () => {
  return (
    <Wrapper>
      <motion.div
        style={loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
        <motion.span
          style={loadingCircle}
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        ></motion.span>
      </motion.div>
    </Wrapper>
  );
};

export default Loader;
