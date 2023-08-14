import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import routes from "./routes/routes";
import { useEffect } from "react";
import Toast from "./components/common/Toast";
import { useDispatch, useSelector } from "react-redux";
import { hide } from "./redux/reducer/toast/toastSlice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
        staleTime:0
      }
    }
})



function App() {
  const toast = useSelector((state) => state.toast);
  const dispatch = useDispatch()

  useEffect(() => {
    if (toast.visible) {
      setTimeout(() => {
        dispatch(hide())
      }, 6000);
    }
  }, [toast.visible,dispatch]);

  
  return (
    <QueryClientProvider client={queryClient}>
      
      {toast.visible && <Toast message={toast.message} status={toast.status} />}
      <RouterProvider router={routes} />
      <GlobalStyles />
    </QueryClientProvider>
  );
}

export default App;
