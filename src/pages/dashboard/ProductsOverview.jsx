import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import DashboardRow from "../../dashboard/common/DashboardRow";
import { Typography } from "@mui/material";
import AddProductButton from "../../dashboard/common/AddProductButton";
import TableWrapper from "../../components/common/TableWrapper";
import Table from "../../components/common/Table";
import ProductTableRow from "../../dashboard/components/productsOverview/ProductTableRow";
import StarPagination from "../../components/common/StarPagination";
import FilterBox from "../../dashboard/components/order/FilterBox";
import Filter from "../../dashboard/common/Filter";
import SortByAlphaIcon from "@mui/icons-material/SortByAlpha";
import CategoryIcon from "@mui/icons-material/Category";
import useProduct from "../../hooks/useProduct";
import Spinner from "../../components/common/Spinner";
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
  "تصویر",
  "نام محصول",
  "دسته بندی",
  "تعداد",
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

function ProductsOverview() {
  const { isLoading,products, setParams } = useProduct();
  function handleClick(item) {
    console.log(item);
  }

  function handleChangePage(page) {
    console.log(page);
    setParams({ page });
  }


  return (
    <Wrapper>
      <DashboardRow>
        <Typography variant="DashboardTitle">محصولات</Typography>
        <span style={{ flex: 1 }}></span>
        <AddProductButton />
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
        {isLoading && <Spinner />}
          {!isLoading &&
            products.data.products.map((product, idx) => {
              return (
                <ProductTableRow
                  key={product?._id}
                  delay={idx}
                  row={idx + 1}
                  product={product}
                  
                />
              );
            })}
        </Table>
      </TableWrapper>
      <StarPagination
        count={products?.total_pages}
        onChange={handleChangePage}
      />
    </Wrapper>
  );
}

export default ProductsOverview;
