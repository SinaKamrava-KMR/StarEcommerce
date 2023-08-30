import { styled } from "styled-components";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";
import BrandItems from "./BrandItems";
import PriceRangeComponent from "./PriceRangeComponent";
import { useReducer } from "react";
import { useSelector } from "react-redux";
import { mergeCategoriesAndSunCategories } from "../../utils/helper";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";


const Wrapper = styled.div`
  width: 300px;
  max-height: 530px;
  min-height: 430px;
  border-radius: 0.8rem;
  padding: 2rem 1.5rem;
  /* border: 1px solid #e3e3e3; */
  box-shadow: 0 0 10px #8e8e8e8c;
  position: sticky;
  top: 8rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
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
    background: #f9f9f9;
    border-radius: 10px;
  }
`;
const Button = styled.p`
  background-color: #333;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 5rem;
  padding: 0.8rem;
  position: sticky;
  bottom: 0;
  z-index: 20;
  width: 100%;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #272727;
  }
`;

const initialState = {
  categories: [],
  subcategories: [],
  brands: [],
};

const reducer = (state, action) => {
  const { payload } = action;
  switch (action.type) {
    case "check/add":
      if (payload.category && !payload.subcategory) {
        return {
          ...state,
          categories: [payload.category],
          subcategories: [],
        };
      }
      if (payload.subcategory) {
        return {
          ...state,
          categories: [payload.category],
          subcategories: [...state.subcategories, payload.subcategory],
        };
      }
      break;
    case "check/remove":
      if (payload.category) {
        return {
          ...state,
          categories: [
            ...state.categories.filter((item) => item !== payload.category),
          ],
          subcategories: [],
        };
      }
      if (payload.subcategory) {
        return {
          ...state,
          subcategories: [
            ...state.subcategories.filter(
              (item) => item !== payload.subcategory
            ),
          ],
        };
      }
      break;

    case "brand/add":
      return { ...state, brands: [payload.brand] };
    case "brand/remove":
      return {
        ...state,
        brands: [...state.brands.filter((brand) => brand !== payload.brand)],
      };
  }
};


const FilterItems = ({ onParams }) => {
  const [checkState, dispatch] = useReducer(reducer, initialState);
  const brands = useSelector(state=>state.brands.brands);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 0 });
  const categories = useSelector((state) => state.categories.categories);
  const subCategories = useSelector((state) => state.categories.subcategories);
  const items = mergeCategoriesAndSunCategories(categories, subCategories);

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const handleAddFiltered = () => {
    let params = {
      subcategories: checkState.subcategories,
      filter: {},
    };

    if (priceRange.max !== 0 && priceRange.min !== 0) {
      params = {
        ...params,
        filter: {
          ...params.filter,
          "price[lt]": priceRange.max,
          "price[gt]": priceRange.min,
        },
      };
    }

    if (checkState.categories.length > 0) {
      params = {
        ...params,
        filter: {
          ...params.filter,
          category: checkState.categories.at(0),
        },
      };
    }

    if (checkState.brands.length > 0) {
      params = {
        ...params,
        filter: {
          ...params.filter,
          brand: checkState.brands.at(0),
        },
      };
    }

    setSearchParams(params.filter);
    onParams(params);
  };

  return (
    <Wrapper>
      <PriceRangeComponent
        onChange={({ max, min }) => setPriceRange({ max, min })}
      />
      <CategoryItem checkState={checkState} dispatch={dispatch} items={items} />
      <BrandItems checkState={checkState} dispatch={dispatch} brands={brands} />

      <span style={{ flex: 1 }}></span>
      <Button onClick={handleAddFiltered}>اعمال فیلتر</Button>
    </Wrapper>
  );
};

FilterItems.propTypes = {
  onParams: PropTypes.func,
};
export default FilterItems;
