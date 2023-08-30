import { HiOutlineChevronLeft } from "react-icons/hi2";
import { useState } from "react";
import PropTypes from "prop-types";

import ItemWrapper from "./ItemWrapper";
import {
  Container,
  IconWrapper,
  Row,
  Title,
  Wrapper,
} from "./CategoryItemStyled";

const BrandItems = ({ dispatch, brands, checkState }) => {
  const [select, setSelect] = useState(false);

  const handleSelect = ({ check, brand }) => {
    if (check) {
      dispatch({ type: "brand/add", payload: { brand } });
    } else {
      dispatch({ type: "brand/remove", payload: { brand } });
    }
  };

  return (
    <Wrapper>
      <Row onClick={() => setSelect((s) => !s)}>
        <Title>برند ها</Title>
        <IconWrapper rotate={select}>
          <HiOutlineChevronLeft fontSize={18} />
        </IconWrapper>
      </Row>
      {select && (
        <Container>
          {brands.map((brand, idx) => {
            const brandChecked = !!checkState?.brands?.find(
              (item) => item === brand
            );
            return (
              <ItemWrapper
                key={idx}
                name={brand}
                delay={`.0${idx}`}
                initCheck={brandChecked}
                onCheck={(check) => handleSelect({ check, brand })}
              />
            );
          })}
        </Container>
      )}
    </Wrapper>
  );
};

BrandItems.propTypes = {
  checkState: PropTypes.object,
  dispatch: PropTypes.func,
  brands: PropTypes.array,
};

export default BrandItems;
