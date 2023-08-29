import { styled } from "styled-components";
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { useState } from "react";
import { useSelector } from "react-redux";

import ItemWrapper from "./ItemWrapper";

const Wrapper = styled.div`
  max-height: 400px;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 2rem;
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.8rem 1rem;
  background-color: #f6f6f6;
  border-radius: 0.5rem;
  color: #838383;
  font-size: 1.4rem;
  position: sticky;
  z-index: 10;
  top: 0;
  cursor: pointer;
  &:hover {
    background-color: #ececec;
  }
`;

const Title = styled.p`
  font-weight: 600;
  color: #545454;
`;
const IconWrapper = styled.div`
  color: #545454;
  transition: all 0.1s ease-in-out;
  transform: ${(props) => (props.rotate ? "rotate(-90deg)" : "rotate(0)")};
`;
const Container = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;
  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #ffffff9a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #e3e3e3;
    border-radius: 10px;
  }
`;

const mergeCategoriesAndSunCategories = (categories, subCategories) => {
  return categories.map((category) => {
    const relatedSubcategories = subCategories.filter(
      (sub) => sub.category === category._id
    );

    return { ...category, subcategories: [...relatedSubcategories] };
  });
};
const CategoryItem = () => {
  const [select, setSelect] = useState(false);
  // const [filteredItems,setFilteredItems] = useState([])
  const categories = useSelector((state) => state.categories.categories);
  const subCategories = useSelector((state) => state.categories.subcategories);

  const items = mergeCategoriesAndSunCategories(categories, subCategories);
  console.log(items);

  const handleCheck = ({ check, category, subcategory }) => {
    console.log(check, category, subcategory);
  };

  return (
    <Wrapper>
      <Row onClick={() => setSelect((s) => !s)}>
        <Title>دسته بندی ها</Title>
        <IconWrapper rotate={select}>
          <HiOutlineChevronLeft fontSize={18} />
        </IconWrapper>
      </Row>
      {select && (
        <Container>
          {items.map((category, cIndex) => {
            return (
              <ItemWrapper
                delay={`.${cIndex}`}
                key={cIndex}
                name={category.name}
                onCheck={(check) =>
                  handleCheck({ check, category: category?._id })
                }
              >
                {category.subcategories.map((subcategory, subIndex) => {
                  return (
                    <ItemWrapper
                      key={subIndex}
                      name={subcategory.name}
              
                      delay={`.${subIndex}`}
                      onCheck={(check) =>
                        handleCheck({
                          check,
                          category: category?._id,
                          subcategory: subcategory?._id,
                        })
                      }
                    />
                  );
                })}
              </ItemWrapper>
            );
          })}
        </Container>
      )}
    </Wrapper>
  );
};

export default CategoryItem;
