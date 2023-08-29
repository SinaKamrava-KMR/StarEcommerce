import { styled } from "styled-components";
import CategoryItem from "./CategoryItem";
import BrandItems from "./BrandItems";
import PriceRange from "./PriceRange";

const Wrapper = styled.div`
  width: 300px;
  height: 530px;
  border-radius: 0.5rem;
  padding: 2rem 1.5rem;
  border: 1px solid #e3e3e3;
  position: sticky;
  top: 4rem;
  bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FilterItems = () => {
  return (
    <Wrapper>
      <PriceRange />
      <CategoryItem />
      <BrandItems />
    </Wrapper>
  );
};

export default FilterItems;
