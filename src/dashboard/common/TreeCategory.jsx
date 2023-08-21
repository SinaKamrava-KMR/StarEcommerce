import { styled } from "styled-components";
import CategoryNode from "./CategoryNode";
import AddItemNode from "./AddItemNode";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  display: flex;

  flex-direction: column;
  justify-self: center;
  gap: 1rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: -20px;
    top: 20px;
    bottom: 30px;
    width: 50px;
    border-right: 1px solid #333;

    border-top: 1px solid #333;
  }
`;
function TreeCategory() {
  const categories = useSelector((state) => state.categories.categories);

  return (
    <Wrapper>
      <AddItemNode title="   دسته بندی جدید" delay={0} />
      {categories.map((item) => {
        return (
          <CategoryNode categoryId={item._id} key={item._id} name={item.name} />
        );
      })}
    </Wrapper>
  );
}

export default TreeCategory;
