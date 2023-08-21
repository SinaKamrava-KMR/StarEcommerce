import { useState } from "react";
import SubcategoryNode from "./SubcategoryNode";
import { keyframes, styled } from "styled-components";
import {
  HiOutlinePencilSquare,
  HiAcademicCap,
  HiMiniCheck,
} from "react-icons/hi2";
import PropTypes from "prop-types";
import AddItemNode from "./AddItemNode";
import { useSelector } from "react-redux";
CategoryNode.propTypes = {
  delay: PropTypes.number,
  name: PropTypes.string,
  categoryId: PropTypes.string,
};
const Wrapper = styled.div`
  width: 300px;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 1rem;
  &:not(:first-child) {
    &::before {
      content: "";
      position: absolute;
      right: -20px;
      top: 30px;
      width: 50px;
      border-right: 1px solid #012e4a;
      border-bottom: 1px solid #012e4a;
    }
  }
`;
const BoxClose = keyframes`
    0% {
    height: 150px;
  }
  
  100% {
    height: 0;
  }


`;
const BoxOpen = keyframes`
  
  0% {
    height: 0;
  }
  
  100% {
    height: 150px;
  }

`;
const TitleBox = styled.div`
  width: 100%;
  height: 50px;
  background: linear-gradient(to right, #243b55, #141e30);
  z-index: 10;
  position: relative;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem;
  cursor: pointer;
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
  color: ${(props) => props.color};
  &:first-child {
    border: ${(props) => (props.isedit ? "1px dashed #fff" : "none")};
  }
`;
const CategoryName = styled.p`
  flex: 1;
  color: #fff;
`;
const Box = styled.div`
  width: 180%;
  animation-name: ${(props) => (props.isopen ? BoxOpen : BoxClose)};
  animation-duration: 0.1s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  padding-right: 40%;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  display: flex;
  position: relative;
  flex-direction: column;

  gap: 1rem;

  &::before {
    content: "";
    position: absolute;
    right: 13%;
    top: -50px;
    bottom: 20px;
    width: 50px;

    border: 0;
    border-right: 1px solid #ababab;
  }
`;
const CategoryInput = styled.input`
  background-color: transparent;
  border: 0;
  border-bottom: 1px solid #fff;
  outline: 0;
  &:focus {
    border-bottom: 1px solid #fff;
    outline: 0;
  }
`;

function CategoryNode({ name = "لباس زنانه", categoryId }) {
  const subcategories = useSelector((state) =>
    state.categories.subcategories.filter(
      (item) => item.category === categoryId
    )
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  return (
    <Wrapper>
      <TitleBox onClick={() => !isEditing && setIsOpen((p) => !p)}>
        <IconWrapper isedit={isEditing} bgcolor="#071e36" color="#e3e3e3">
          <HiAcademicCap />
        </IconWrapper>
        <CategoryName>
          {isEditing ? (
            <CategoryInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <p>{value}</p>
          )}
        </CategoryName>

        <IconWrapper
          onClick={(event) => {
            event.stopPropagation();
            setIsEditing((e) => !e);
          }}
          bgcolor="#2e4154"
          color="#f2f2f2"
        >
          {isEditing ? <HiMiniCheck /> : <HiOutlinePencilSquare />}
        </IconWrapper>
      </TitleBox>
      <Box isopen={isOpen}>
        {isOpen && (
          <>
            <AddItemNode bgColor="#e6fbde" title="  زیر مجموعه جدید" delay={0} />
            {subcategories.map((item, i) => {
              return (
                <SubcategoryNode
                  key={item._id}
                  name={item.name}
                  delay={`0.${i}`}
                />
              );
            })}
          </>
        )}
      </Box>
    </Wrapper>
  );
}

export default CategoryNode;
