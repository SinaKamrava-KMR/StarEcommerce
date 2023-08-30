
import { HiOutlineChevronLeft } from "react-icons/hi2";
import { useState } from "react";

import ItemWrapper from "./ItemWrapper";
import PropTypes from "prop-types";
import { Container, IconWrapper, Row, Title, Wrapper } from "./CategoryItemStyled";





const CategoryItem = ({checkState,dispatch,items}) => {
  
  const [select, setSelect] = useState(false);
  const handleCheck = ({ check, category, subcategory }) => {
    if (check) {
      dispatch({
        type: "check/add",
        payload: {
          category,
          subcategory,
        },
      });
    } else {
      dispatch({
        type: "check/remove",
        payload: {
          category,
          subcategory,
        },
      });
    }
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
            const categoryChecked = !!checkState?.categories?.find(
              (item) => item === category._id
            );
            return (
              <ItemWrapper
                delay={`.0${cIndex}`}
                key={cIndex}
                name={category.name}
                initCheck={categoryChecked}
                onCheck={(check) =>
                  handleCheck({ check, category: category?._id })
                }
              >
                {category.subcategories.map((subcategory, subIndex) => {
                  return (
                    <ItemWrapper
                      key={subIndex}
                      name={subcategory.name}
                      parentCheck={categoryChecked}
                      delay={`.${subIndex}`}
                      onCheck={(check) =>
                        handleCheck({
                          check,
                          category: category._id,
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

CategoryItem.propTypes = {
  checkState: PropTypes.object,
  dispatch: PropTypes.func,
  items: PropTypes.array,
}
export default CategoryItem;
