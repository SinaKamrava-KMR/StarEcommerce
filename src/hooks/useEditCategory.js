import { useMutation } from "@tanstack/react-query";
import { show } from "../redux/reducer/toast/toastSlice";
import { useDispatch } from "react-redux";

import { updateCategory } from "../redux/reducer/category/categorySlice";
import { editCategory } from "../services/api/editCategory";

export function useEditCategory() {
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({id, data}) => editCategory(id, data),
    onSuccess: (res) => {
      dispatch(
        show({
          message: "  دسته بندی  با موفقیت ویرایش شد  ",
          status: "success",
        })
      );

      dispatch(updateCategory(res.data.category));
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
