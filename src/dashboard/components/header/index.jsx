import PanelLogo from "../../common/PanelLogo";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import BackButton from "./BackButton";
import { Grid } from "@mui/material";
import SearchBox from "./SearchBox";

const HeaderStyled = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: "#fff",
  gap: "80px",
  justifyContent: "space-between",
  paddingBottom: "10px",
  borderBottom: "1px solid #f3f3f3",
  "@media (max-width:1000px)": {
    gap: "60px",
  },
  "@media (max-width:600px)": {
    gap: "20px",
  },
});

function DashboardHeader() {
  return (
    <Grid item xs={12} component="header">
      <HeaderStyled>
        <PanelLogo />
        <SearchBox />
        <BackButton />
      </HeaderStyled>
    </Grid>
  );
}

export default DashboardHeader;
