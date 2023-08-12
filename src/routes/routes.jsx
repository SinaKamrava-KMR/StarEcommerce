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

import SignUp from "../pages/SignUp";
import ProductsManagement from "../pages/dashboard/ProductsManagement";
import Users from "../pages/dashboard/Users";
import AddProduct from "../pages/dashboard/AddProduct";
import ProductsOverview from "../pages/dashboard/ProductsOverView";
// import ProtectedDashboard from "../components/router/ProtectedDashboard";

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
        element: <Cart />,
      },
      {
        path: "/account",
        element: (
          <PrivateRoute>
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
      {
        path: "/dashboard/management",
        element: <ProductsManagement />,
      },
      {
        path: "/dashboard/users",
        element: <Users />,
      },
      {
        path: "/dashboard/addProduct",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/products",
        element: <ProductsOverview />,
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
    path: "/auth/:state",
    errorElement: <NotFound />,
  },
  {
    element: (
      <ProtectedRoute>
        <SignUp />
      </ProtectedRoute>
    ),
    path: "/auth/signup",
    errorElement: <NotFound />,
  },
]);

export default routes;
