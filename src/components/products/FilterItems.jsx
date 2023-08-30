import { styled } from "styled-components";
import CategoryItem from "./CategoryItem";
import BrandItems from "./BrandItems";
import PriceRangeComponent from "./PriceRangeComponent";
import { useReducer } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { mergeCategoriesAndSunCategories } from "../../utils/helper";
import { useBrands } from "../../hooks/useBrands";

const Wrapper = styled.div`
  width: 300px;
  max-height: 530px;
  min-height: 330px;
  border-radius: 0.8rem;
  padding: 2rem 1.5rem;
  /* border: 1px solid #e3e3e3; */
  box-shadow: 0 0 10px #8e8e8e8c;
  position: sticky;
  top: 4rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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
          categories: [...state.categories, payload.category],
        };
      }
      if (payload.subcategory) {
        return {
          ...state,
          categories: [
            ...state.categories.filter((item) => item !== payload.category),
          ],
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
      return { ...state, brands: [...state.brands, payload.brand] };
    case "brand/remove":
      return {
        ...state,
        brands: [...state.brands.filter((brand) => brand !== payload.brand)],
      };
  }
};

const FilterItems = () => {
  const [checkState, dispatch] = useReducer(reducer, initialState);
  const brands = useBrands();
  const categories = useSelector((state) => state.categories.categories);
  const subCategories = useSelector((state) => state.categories.subcategories);
  const items = mergeCategoriesAndSunCategories(categories, subCategories);

  useEffect(() => {
    console.log(checkState);
  }, [checkState]);

  return (
    <Wrapper>
      <PriceRangeComponent />
      <CategoryItem checkState={checkState} dispatch={dispatch} items={items} />
      <BrandItems dispatch={dispatch} brands={brands} />
    </Wrapper>
  );
};

export default FilterItems;
