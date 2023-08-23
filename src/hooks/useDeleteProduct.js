import { useMutation, useQueryClient } from "@tanstack/react-query";
import ProductServices from "../services/api/productServices";
import { useDispatch } from "react-redux";
import { show } from "../redux/reducer/toast/toastSlice";

export default function useDeleteProduct() {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  const services = new ProductServices();

  const { isLoading: isDeleting, mutate: deleteProduct } = useMutation({
    mutationFn: services.delete,
    onSuccess: () => {
      dispatch(
        show({
          message: "  محصول با موفقیت حذف شد  ",
          status: "success",
        })
      );
      queryClient.invalidateQueries({
        queryKey: ["products"],
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

  return { isDeleting, deleteProduct };
}
