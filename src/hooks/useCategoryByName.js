import { useState } from "react";
import { useSelector } from "react-redux";

export function useCategoryByName() {
  const [name, setName] = useState("");
  const category = useSelector(
    (state) =>
      state.categories.categories.filter((item) => item.name === name)[0]
  );

  return { category, setName };
}
