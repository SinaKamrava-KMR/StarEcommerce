import { useDispatch } from "react-redux";
import { show } from "../redux/reducer/toast/toastSlice";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../services/api/updateOrder";

export function useUpdateOrder() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({id, data}) => updateOrder(id, data),
    onSuccess: (res) => {
      dispatch(
        show({
          message: "   سفارش  با موفقیت ویرایش شد  ",
          status: "success",
        })
      );
      queryClient.invalidateQueries({
        queryKey: ["orders"],
      });

      console.log(res);
      // dispatch(updateCategory(res.data.category));
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
