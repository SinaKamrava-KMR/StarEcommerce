import { Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import { styled } from "styled-components";
import { USER_ID } from "../configs/constants";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { userData } from "../redux/reducer/user/userThunk";
import {
  addCategories,
  addSubcategories,
} from "../redux/reducer/category/categorySlice";

import { useQuery } from "@tanstack/react-query";
import { getCategories, getSubcategories } from "../services/api/categoryApi";
import Footer from "../components/footer/Footer";
import { useEffect } from "react";
import { initCart } from "../redux/reducer/cart/cartSlice";

import { addBrands } from "../redux/reducer/brands/brandSlice";
import getProducts from "../services/api/getProducts";

const MainLayout = styled.main`
  flex: 1;
`;
const AppLayoutStyle = styled.main`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

function AppLayout() {
  const userId = Cookies.get(USER_ID);
  const dispatch = useDispatch();

  const { isLoading: isCategoryLoading, data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  const { isLoading: isSubCategoryLoading, data: subcategories } = useQuery({
    queryKey: ["subcategories"],
    queryFn: getSubcategories,
  });


  if (!isCategoryLoading && categories) {
    dispatch(addCategories(categories.data.categories));
  }
  if (!isSubCategoryLoading && subcategories) {
    dispatch(addSubcategories(subcategories.data.subcategories));
  }



  useEffect(() => {

    getProducts({ page: 1, limit: 1000 }).then((res) => {
      if (res.data.products) {
        const brands = res.data.products.map((product) => product.brand);
        dispatch(addBrands([...new Set(brands)]));
      }
    });

// ====================================
    let cart = localStorage.getItem("cart") || "[]";
    cart = JSON.parse(cart);
    dispatch(initCart(cart));
// ====================================

    if (userId) {
      dispatch(userData(userId));
    }



    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <AppLayoutStyle>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
      <Footer />
    </AppLayoutStyle>
  );
}

export default AppLayout;
