import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { show } from "../redux/reducer/toast/toastSlice";
import { updateUser } from "../services/api/updateUser";


export function useUpdateUser(onSuccess) {
  const dispatch = useDispatch();

  const { isLoading, mutate } = useMutation({
    mutationFn: ({id, data}) =>updateUser(id, data),
    onSuccess: (res) => {
      // dispatch(
      //   show({
      //     message: "اطلاعات  با موفقیت ثبت  شد  ",
      //     status: "success",
      //   })
      // );

      onSuccess(res);
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