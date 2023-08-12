import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import Stats from "../../dashboard/components/home/Stats";

const HomeWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;

`;

function DashboardHome() {
  return (
    <HomeWrapper>
      <Stats />
    </HomeWrapper>
  );
}

export default DashboardHome;
