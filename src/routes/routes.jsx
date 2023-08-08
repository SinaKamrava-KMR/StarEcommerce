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
import Login from "../pages/Login";
import ProtectedRoute from "../components/router/ProtectedRoute";
import PrivateRoute from "../components/router/privateRoute";
import ProtectedDashboard from "../components/router/ProtectedDashboard";

const routes = createBrowserRouter([
  //================== store routes ==================
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
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
            {" "}
            <Account />
          </PrivateRoute>
        ),
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping />
          </PrivateRoute>
        ),
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
  //================== dashboard routes ==============
  {
    element: (
      <ProtectedDashboard>
        <DashboardLayout />
      </ProtectedDashboard>
    ),
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
  // ============= authentication routes ==================
  {
    element: (
      <ProtectedRoute>
        <Login />
      </ProtectedRoute>
    ),
    path: "/auth",
    errorElement: <NotFound />,
  },
]);

export default routes;
