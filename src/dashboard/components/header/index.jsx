import PanelLogo from "../../common/PanelLogo";
import styled from "@emotion/styled";
import { Box } from "@mui/system";
import BackButton from "./BackButton";
import { Grid } from "@mui/material";

const HeaderStyled = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

function DashboardHeader() {
  return (
    <Grid item xs={12}  component="header">
      <HeaderStyled>
        <PanelLogo />
        <BackButton />
      </HeaderStyled>
    </Grid>
  );
}

export default DashboardHeader;
