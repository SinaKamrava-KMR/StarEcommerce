import { useMutation } from "@tanstack/react-query";
import { show } from "../redux/reducer/toast/toastSlice";
import { useDispatch } from "react-redux";

import {  updateSubCategory } from "../redux/reducer/category/categorySlice";
import { editSubCategory } from "../services/api/editSubCategory";

export function useEditSubCategory() {
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({id, data}) => editSubCategory(id, data),
    onSuccess: (res) => {
      dispatch(
        show({
          message: "   زیر مجموعه  با موفقیت ویرایش شد  ",
          status: "success",
        })
      );

      dispatch(updateSubCategory(res.data.subcategory));
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

  return { isLoading, mutate };
}
