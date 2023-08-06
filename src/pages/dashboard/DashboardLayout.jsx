// ======== import from library
import { Outlet } from "react-router-dom";
import styled from "@emotion/styled";
import { ThemeProvider } from "@mui/system";

// ======== import from files
import theme from "../../styles/MuiTheme";
import DashboardHeader from "../../dashboard/components/header";
import DashboardSidebar from "../../dashboard/components/sidebar";
import { Grid } from "@mui/material";


const GridGroup = styled(Grid)({
  height: "100%",
  padding: "1.2rem 1.5rem",
});

function DashboardLayout() {
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
