import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import OrderTabs from "../../dashboard/components/order/OrderTabs";
import FilterBox from "../../dashboard/components/order/FilterBox";
import TableWrapper from "../../components/common/TableWrapper";
import Table from "../../components/common/Table";
import StarPagination from "../../components/common/StarPagination";

const OrdersLayout = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem 3rem",
  gap: "2rem",
  "@media (max-width:900px)": {
    padding: "1.5rem 1rem",
  },
});
const TopLayout = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
  "@media (max-width:950px)": {
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "2rem",
  },
});
const ContentWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});


function OrdersManagement() {
  return (
    <OrdersLayout>
      <TopLayout>
        <ContentWrapper>
          <Typography variant="DashboardTitle">سفارشات</Typography>
          <OrderTabs />
        </ContentWrapper>

        <FilterBox />
      </TopLayout>

      <TableWrapper>
        <Table></Table>
      </TableWrapper>

      <StarPagination />
    </OrdersLayout>
  );
}

export default OrdersManagement;
