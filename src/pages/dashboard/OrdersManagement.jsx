import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import OrderTabs from "../../dashboard/components/order/OrderTabs";
import FilterBox from "../../dashboard/components/order/FilterBox";
import TableWrapper from "../../components/common/TableWrapper";
import Table from "../../components/common/Table";
import StarPagination from "../../components/common/StarPagination";
import CategoryIcon from "@mui/icons-material/Category";
import Filter from "../../dashboard/common/Filter";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import OrderRow from "../../dashboard/components/order/OrderRow";

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

const headerItems = [
  "ردیف",
  "مشتری",
  "مجموع مبلغ",
  "زمان ثبت سفارش",
  "کالا",
  "برسی",
];

const categoryItems = [
  {
    label: "لباس کودک",
    count: 4,
  },
  {
    label: "لباس زنانه",
    count: 12,
  },
];

function OrdersManagement() {
  function handleClick(item) {
    console.log(item);
  }
  return (
    <OrdersLayout>

    
      <TopLayout>
        <ContentWrapper>
          <Typography variant="DashboardTitle">سفارشات</Typography>
          <OrderTabs />
        </ContentWrapper>

        <FilterBox>
          <Filter
            delay={".1"}
            label="دسته بندی ها"
            onClick={handleClick}
            items={categoryItems}
          >
            <CategoryIcon />
          </Filter>
          <Filter
            delay={".2"}
            label="بازه زمانی"
            onClick={handleClick}
            items={categoryItems}
          >
            <TimelapseIcon />
          </Filter>
        </FilterBox>
      </TopLayout>

      <TableWrapper>
        <Table headerItems={headerItems}>
          <OrderRow delay={0} />
          <OrderRow delay={1} />
          <OrderRow delay={2} />
          <OrderRow delay={3} />
          <OrderRow delay={4} />
          <OrderRow delay={5} />
          <OrderRow delay={6} />
          <OrderRow delay={7} />
          <OrderRow delay={8} />
          <OrderRow delay={9} />
          <OrderRow delay={10} />
          <OrderRow delay={0} />
          <OrderRow delay={0} />
          <OrderRow delay={0} />
          <OrderRow delay={0} />
          <OrderRow delay={0} />
        </Table>
      </TableWrapper>

      <StarPagination />
    </OrdersLayout>
  );
}

export default OrdersManagement;
