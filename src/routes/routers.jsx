import { createBrowserRouter } from "react-router-dom";


import AppLayout from "../pages/AppLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import Cart from "../pages/cart";
import Product from "../pages/product";
import Products from "../pages/Products";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import OrdersManagement from "../pages/dashboard/OrdersManagement";
import Shipping from "../pages/Shipping";
import DashboardHome from "../pages/dashboard/DashboardHome";
import Account from "../pages/Account";

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
        path: "/account",
        element: <Account />,
      },
      {
        path: "/shipping",
        element: <Shipping />,
      },
      {
        path: "/product/:productId",
        element: <Product />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/",
        element: <DashboardHome />,
      },
      {
        path: "/dashboard/orders",
        element: <OrdersManagement />,
      },
    ],
  },
]);

export default router;
