import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import DashboardRow from "../../dashboard/common/DashboardRow";
import { Typography } from "@mui/material";
import TableWrapper from "../../components/common/TableWrapper";
import Table from "../../components/common/Table";
import StarPagination from "../../components/common/StarPagination";
import FilterBox from "../../dashboard/components/order/FilterBox";
import Filter from "../../dashboard/common/Filter";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CategoryIcon from "@mui/icons-material/Category";
import SaveButton from "../../dashboard/components/productsManagement/SaveButton";
import TableRow from "../../components/common/TableRow";

const Wrapper = styled(Box)({
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

const headerItems = [
  "ردیف",
  "نام محصول",
  "دسته بندی",
  "قیمت",
  "موجودی",
  "بررسی",
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



function ProductsManagement() {
  function handleClick(item) {
    console.log(item);
  }
  return (
    <Wrapper>
      <DashboardRow>
        <Typography variant="DashboardTitle">مدیریت محصولات </Typography>
        <span style={{ flex: 1 }}></span>
        <SaveButton />
      </DashboardRow>
      <DashboardRow>
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
            label="مرتب کردن"
            onClick={handleClick}
            items={categoryItems}
          >
            <SortByAlphaIcon />
          </Filter>
        </FilterBox>
      </DashboardRow>
      <TableWrapper>
        <Table headerItems={headerItems}>

        <TableRow delay={0} />
          <TableRow delay={1} />
          <TableRow delay={2} />
          <TableRow delay={3} />
          <TableRow delay={4} />
          <TableRow delay={5} />
          <TableRow delay={6} />
          <TableRow delay={7} />
          <TableRow delay={8} />
          <TableRow delay={9} />
          <TableRow delay={10} />
          <TableRow delay={0} />
          <TableRow delay={0} />
          <TableRow delay={0} />
          <TableRow delay={0} />
          <TableRow delay={0} />



        </Table>
      </TableWrapper>
      <StarPagination />
    </Wrapper>
  );
}

export default ProductsManagement;
