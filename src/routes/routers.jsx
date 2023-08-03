import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Product from "../pages/product";
import Products from "../pages/products";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import OrdersManagement from "../pages/dashboard/OrdersManagement";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/products/:categoryId",
        element: <Products />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/orders",
        element: <OrdersManagement />,
      },
    ],
  },
]);

export default router;
