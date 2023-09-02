import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import routes from "./routes/routes";
import { useEffect } from "react";
import Toast from "./components/common/Toast";
import { useDispatch, useSelector } from "react-redux";
import { hide, show } from "./redux/reducer/toast/toastSlice";
import { cleanMessage } from "./redux/reducer/cart/cartSlice";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  const toast = useSelector((state) => state.toast);
  const cartMessage = useSelector((state) => state.cart.message);


  const dispatch = useDispatch();

  if (cartMessage.message !== "") {
    dispatch(
      show({
        message: cartMessage.message,
        status: cartMessage.status,
      })
    );
  }

  useEffect(() => {
    if (toast.visible) {
      setTimeout(() => {
        dispatch(hide());
        if (cartMessage.message !== "") {
          dispatch(cleanMessage());
        }
      }, 6000);
    }
  }, [toast.visible, dispatch, cartMessage.message]);

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {toast.visible && <Toast message={toast.message} status={toast.status} />}
      <RouterProvider router={routes} />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
