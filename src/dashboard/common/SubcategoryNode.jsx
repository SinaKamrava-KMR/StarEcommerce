import { motion } from "framer-motion";
import { styled } from "styled-components";
import {
  HiOutlinePencilSquare,
  HiAcademicCap,
  HiMiniCheck,
} from "react-icons/hi2";
import { useState } from "react";
import PropTypes from "prop-types";
SubcategoryNode.propTypes = {
  delay: PropTypes.number,
  name: PropTypes.string,
};
const Wrapper = styled.div`
  width: 300px;
  height: 50px;

  border-radius: 0.5rem;
  /* background: linear-gradient(to right, #3a95f0 , #0c71af ); */
  background: linear-gradient(to left, #26476d, #435e90);
  position: relative;

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    right: -50px;
    top: 30px;
    width: 50px;
    border-right: 1px solid #ababab;
    border-bottom: 1px solid #ababab;
  }
`;
const SubCategoryName = styled.div`
  flex: 1;
  color: #fff;
`;
const SubCategoryInput = styled.input`
background-color: transparent;
border: 0;
border-bottom: 1px solid #fff;
outline: 0;
&:focus{
  border-bottom: 1px solid #fff;
  outline: 0;
}
`;

const IconWrapper = styled.div`
  width: 35px;
  height: 100%;
  background-color: ${(props) => props.bgcolor};
  position: relative;
  border-radius: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: 22px;
  cursor: pointer;
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.isedit ? "1px dashed #fff" : "none")};
  }
`;

function SubcategoryNode({ delay, name = "تاپ مشکی" }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  return (
    <Wrapper
      as={motion.div}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      <IconWrapper isedit={isEditing} bgcolor="#405c7c" color="#e3e3e3">
        <HiAcademicCap />
      </IconWrapper>
      <SubCategoryName>
        {isEditing ? (
          <SubCategoryInput
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <p>{value}</p>
        )}
      </SubCategoryName>

      <IconWrapper
        onClick={() => setIsEditing((e) => !e)}
        bgcolor="#405c7c"
        color="#f2f2f2"
      >
        {isEditing ? <HiMiniCheck /> : <HiOutlinePencilSquare />}
      </IconWrapper>
    </Wrapper>
  );
}

export default SubcategoryNode;
