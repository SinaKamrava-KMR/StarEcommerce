import { useState } from "react";
import { useSelector } from "react-redux";
import { HiOutlinePencilSquare, HiMiniCheck } from "react-icons/hi2";
import PropTypes from "prop-types";

import AddItemNode from "./AddItemNode";
import SubcategoryNode from "./SubcategoryNode";
import {
  Box,
  CategoryInput,
  CategoryName,
  IconImg,
  IconLable,
  IconWrapper,
  TitleBox,
  Wrapper,
} from "./CategoryNodeStyles";
import { useEditCategory } from "../../hooks/useEditCategory";
import Loading from "../../components/common/Loading";
import { useCreateSubCategory } from "../../hooks/useCreateSubCategory";

const CategoryNode = ({ name = "لباس زنانه", categoryId, icon }) => {
  const subcategories = useSelector((state) =>
    state.categories.subcategories.filter(
      (item) => item.category === categoryId
    )
  );

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(name);
  const [iconMedia, setIconMedia] = useState(null);

  const { isCreatingSunCategory, createSubCategoryMutate } =
    useCreateSubCategory();
  const { isLoading, mutate } = useEditCategory();
  const handleUploadIcon = (e) => {
    const file = e.target.files[0];
    setIconMedia(file);
  };

  const handleClick = (event) => {
    event.stopPropagation();

    if (value !== name && isEditing) {
      if (iconMedia !== null) {
        mutate({ id: categoryId, data: { name: value, icon: iconMedia } });
      } else {
        mutate({ id: categoryId, data: { name: value } });
      }
    }

    setIsEditing((e) => !e);
  };

  const handleCreate = (data) => {
    data.category = categoryId;
    createSubCategoryMutate(data);
  };

  return (
    <Wrapper>
      {(isLoading || isCreatingSunCategory) && <Loading />}
      <TitleBox>
        <IconWrapper isedit={isEditing} bgcolor="#071e360" color="#e3e3e3">
          <IconImg
            src={
              iconMedia !== null
                ? URL.createObjectURL(iconMedia)
                : `http://localhost:8000/images/categories/icons/${icon}`
            }
          />
          {isEditing && (
            <>
              <IconLable htmlFor="icon_img"></IconLable>
              <input
                id="icon_img"
                type="file"
                hidden
                onChange={handleUploadIcon}
              />
            </>
          )}
        </IconWrapper>
        <CategoryName onClick={() => !isEditing && setIsOpen((p) => !p)}>
          {isEditing ? (
            <CategoryInput
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          ) : (
            <p>{name}</p>
          )}
        </CategoryName>

        <IconWrapper onClick={handleClick} bgcolor="#27292b" color="#f2f2f2">
          {isEditing ? <HiMiniCheck /> : <HiOutlinePencilSquare />}
        </IconWrapper>
      </TitleBox>
      <Box isopen={isOpen}>
        {isOpen && (
          <>
            <AddItemNode
              bgColor="#ffffff"
              palceHolder="زیر مجموعه"
              isSubCategory={true}
              title="زیر مجموعه جدید"
              delay={0}
              onCreate={handleCreate}
            />
            {subcategories.map((item, i) => {
              return (
                <SubcategoryNode
                  key={item._id}
                  name={item.name}
                  delay={`0.${i}`}
                  id={item._id}
                  category={item.category}
                />
              );
            })}
          </>
        )}
      </Box>
    </Wrapper>
  );
};

CategoryNode.propTypes = {
  delay: PropTypes.number,
  name: PropTypes.string,
  categoryId: PropTypes.string,
  icon: PropTypes.string | PropTypes.object,
};

export default CategoryNode;
