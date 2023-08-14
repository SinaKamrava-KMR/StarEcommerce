import { Outlet } from "react-router-dom";
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

const MainLayout = styled.main`
  flex: 1;
`;
const AppLayoutStyle = styled.main`
  height: 100%;
  width: 100%;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1200px) {
    width: 97%;
    margin-inline: auto;
  }
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

  if (userId) {
    dispatch(userData(userId));
  }

  return (
    <AppLayoutStyle>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </AppLayoutStyle>
  );
}

export default AppLayout;
