import { styled } from "styled-components";
import CategoryNode from "./CategoryNode";
import AddItemNode from "./AddItemNode";
import { useSelector } from "react-redux";
import { useCreateCategory } from "../../hooks/useCreateCategory";
import Loading from "../../components/common/Loading";

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
const TreeCategory = () => {
  const categories = useSelector((state) => state.categories.categories);
  const { isLoading, mutate } = useCreateCategory();
  const handleCreateCategory = (data) => {
    mutate(data);
    console.log(data);
  };

  return (
    <Wrapper>
      {isLoading && <Loading />}
      <AddItemNode
        onCreate={handleCreateCategory}
        title="دسته بندی جدید"
        palceHolder="دسته بندی"
        delay={0}
      />
      {categories.map((item) => {
        return (
          <CategoryNode
            icon={item.icon}
            categoryId={item._id}
            key={item._id}
            name={item.name}
          />
        );
      })}
    </Wrapper>
  );
};

export default TreeCategory;
