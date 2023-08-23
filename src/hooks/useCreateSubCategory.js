import { useMutation } from "@tanstack/react-query";
import { show } from "../redux/reducer/toast/toastSlice";
import { useDispatch } from "react-redux";
import { addSubCategory } from "../redux/reducer/category/categorySlice";
import { createSubCategory } from "../services/api/createSubCategory";

export function useCreateSubCategory() {
  const dispatch = useDispatch();

  const { isLoading:isCreatingSunCategory, mutate:createSubCategoryMutate } = useMutation({
    mutationFn: createSubCategory,
    onSuccess: (res) => {
      dispatch(
        show({
          message: " زیر مجموعه  جدید با موفقیت اضافه شد  ",
          status: "success",
        })
      );

      dispatch(addSubCategory(res.data.subcategory));
    },
    onError: (error) => {
      dispatch(
        show({
          message: error.message,
          status: "error",
        })
      );
    },
  });

  return { isCreatingSunCategory, createSubCategoryMutate };
}
