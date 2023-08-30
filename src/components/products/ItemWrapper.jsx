import { styled } from "styled-components";
import PropTypes from "prop-types";
import { useState } from "react";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import CheckBox from "../common/CheckBox";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-inline: 1rem;
  cursor: pointer;
`;
const Text = styled.div`
    font-size: 1.4rem;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-right: 2.5rem;
`;
const IconWrapper = styled.div`
  color: #545454;
  transition: all 0.1s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "rotate(0)")};
`;
const ItemWrapper = ({ name, children, onCheck, delay = 0,parentCheck=false ,initCheck}) => {
  const [select, setSelect] = useState(false);

  return (
    <Wrapper
      as={motion.div}
      initial={{ x: "10px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <Row onClick={() => setSelect((s) => !s)}>
        <CheckBox onCheck={onCheck} parentCheck={parentCheck} initCheck={initCheck} />
        <Text>{name}</Text>
        <span style={{ flex: 1 }}></span>
        {children && (
          <IconWrapper rotate={select}>
            <HiOutlineChevronLeft fontSize={18} />
          </IconWrapper>
        )}
      </Row>
      {select && children && <Container>{children}</Container>}
    </Wrapper>
  );
};

ItemWrapper.propTypes = {
  children: PropTypes.node,
  onCheck: PropTypes.func,
  name: PropTypes.string,
  delay: PropTypes.string,
  parentCheck: PropTypes.bool,
  initCheck: PropTypes.bool,
};

export default ItemWrapper;
