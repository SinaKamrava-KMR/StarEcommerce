import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../pages/AppLayout";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";

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
import ProtectedDashboard from "../components/router/ProtectedDashboard";
import Categories from "../pages/dashboard/Categories";
import Purchase from "../pages/Purchase";
import Cart from "../pages/Cart";
import ShippingResult from "../pages/ShippingResult";

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
        path: "/payment/:status",
        element: (
          <PrivateRoute>
            <ShippingResult />
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
      {
        path: "/purchase",
        element: (
          <PrivateRoute>
            <Purchase />
          </PrivateRoute>
        ),
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
      {
        path: "/dashboard/categories",
        element: <Categories />,
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
