import { useSelector } from "react-redux";

export function useCategoryById(id) {
  const category = useSelector(
    (state) => state.categories.categories.filter((item) => item._id === id)[0]
  );

  return { category };
}
