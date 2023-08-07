import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const HomeWrapper = styled(Box)({
  height:"100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
});

function DashboardHome() {
  return (
    <HomeWrapper>
      <h1>صفحه اصلی داشبورد و محل نمایش نمودار ها</h1>
    </HomeWrapper>
  );
}

export default DashboardHome;
