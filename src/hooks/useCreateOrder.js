import { useMutation } from "@tanstack/react-query";
import { createOrder } from "../services/api/createOrder";
import { useDispatch } from "react-redux";
import { initCart } from "../redux/reducer/cart/cartSlice";

export function useCreateOrder() {
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: (data) => createOrder(data),
    onSuccess: (res) => {
      console.log(res);
      dispatch(initCart([]));
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return { isLoading, mutate};
}
