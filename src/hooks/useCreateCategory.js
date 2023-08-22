import { useMutation, useQueryClient } from "@tanstack/react-query";
import { show } from "../redux/reducer/toast/toastSlice";
import { useDispatch } from "react-redux";
import { createCategory } from "../services/api/createCategory";
import { addCategory } from "../redux/reducer/category/categorySlice";

export function useCreateCategory() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: createCategory,
    onSuccess: (res) => {
      dispatch(
        show({
          message: "  دسته بندی جدید با موفقیت اضافه شد  ",
          status: "success",
        })
      );

      dispatch(addCategory(res.data.category));
      queryClient.invalidateQueries({
        queryKey: ["category"],
      });
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
