import { motion } from "framer-motion";
import { styled } from "styled-components";
import PropTypes from "prop-types";

SubcategoryNode.propTypes = {
  delay: PropTypes.number,
};
const Wrapper = styled.div`
  width: 300px;
  min-height: 50px;
  background-color: #ff8e8e;
  border-radius: 0.5rem;

  position: relative;

    &::before {
      content: "";
      position: absolute;
      right: -50px;
      top: 30px;
      width: 50px;
      border-right: 1px solid  #ababab;;
      border-bottom: 1px solid  #ababab;
    }

`;

function SubcategoryNode({ delay }) {
  return (
    <Wrapper
      as={motion.div}
      initial={{ x:50, opacity: 0 }}
      animate={{x:0, opacity: 1 }}
      transition={{ delay }}
    ></Wrapper>
  );
}

export default SubcategoryNode;
