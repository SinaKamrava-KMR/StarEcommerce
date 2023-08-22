import { motion } from "framer-motion";
import {
  HiOutlinePencilSquare,
  HiMiniBolt,
  HiMiniCheck,
} from "react-icons/hi2";
import { useState } from "react";
import PropTypes from "prop-types";
import {
  IconWrapper,
  SubCategoryInput,
  SubCategoryName,
  Wrapper,
} from "./SubcategoryNodeStyles";
import { useEditSubCategory } from "../../hooks/useEditSubCategory";
import Loading from "../../components/common/Loading";

function SubcategoryNode({ delay, name = "تاپ مشکی", id, category }) {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  const { isLoading, mutate } = useEditSubCategory();

  const handleClick = (event) => {
    event.stopPropagation();
    if (value !== name && isEditing) {
      mutate({ id, data: { name: value, category } });
    }

    setIsEditing((e) => !e);
  };

  return (
    <Wrapper
      as={motion.div}
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
    >
      {isLoading && <Loading />}
      <IconWrapper isedit={false} bgcolor="#405c7c0" color="#e3e3e3">
        <HiMiniBolt />
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

      <IconWrapper onClick={handleClick} bgcolor="#3b3c3c" color="#f2f2f2">
        {isEditing ? <HiMiniCheck /> : <HiOutlinePencilSquare />}
      </IconWrapper>
    </Wrapper>
  );
}

SubcategoryNode.propTypes = {
  delay: PropTypes.number,
  name: PropTypes.string,
  id: PropTypes.string,
  category: PropTypes.string,
};

export default SubcategoryNode;
