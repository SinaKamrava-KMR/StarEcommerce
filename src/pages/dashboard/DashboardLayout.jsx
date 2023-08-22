// ======== import from library
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/system";

// ======== import from files
import theme from "../../styles/MuiTheme";
import DashboardHeader from "../../dashboard/components/header";
import DashboardSidebar from "../../dashboard/components/sidebar";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import {
  addCategories,
  addSubcategories,
} from "../../redux/reducer/category/categorySlice";
import {
  getCategories,
  getSubcategories,
} from "../../services/api/categoryApi";

const GridGroup = styled(Grid)({
  height: "100%",
  padding: "1.2rem 1.5rem",
});

function DashboardLayout() {
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
  return (
    <ThemeProvider theme={theme}>
      <GridGroup container>
        <DashboardHeader />
        <DashboardSidebar />
        <Grid component="main" item xs={10}>
          <Outlet />
        </Grid>
      </GridGroup>
    </ThemeProvider>
  );
}

export default DashboardLayout;
