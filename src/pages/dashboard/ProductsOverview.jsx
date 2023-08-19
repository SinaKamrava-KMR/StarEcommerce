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
import useFilterItems from "../../hooks/filter/useFilterItems";
import { useState } from "react";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import Loading from "../../components/common/Loading";

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

const sortItems = [
  {
    tag: "sort",
    label: "بیشترین تعداد ",
    value: "-quantity",
  },
  {
    tag: "sort",
    label: "کمترین تعداد",
    value: "quantity",
  },
];

function ProductsOverview() {
  const { isLoading, products, setParams } = useProduct();
  const { items, isLoading: isFiltering } = useFilterItems();
  const [filterBy, setFilterBy] = useState("");
  const { isDeleting, deleteProduct } = useDeleteProduct();

  function handleClick(item) {
    if (item?.tag) {
      setParams((params) => ({ ...params, [item.tag]: item.value }));
    } else {
      setFilterBy(item.value);
    }
  }

  function handleChangePage(page) {
    setParams({ page });
  }

  function handleDelete(id) {
    deleteProduct(id);
  }

  return (
    <Wrapper>
      {isDeleting && <Loading />}
      <DashboardRow>
        <Typography variant="DashboardTitle">محصولات</Typography>
        <span style={{ flex: 1 }}></span>
        <AddProductButton />
      </DashboardRow>
      <DashboardRow>
        {!isFiltering && (
          <FilterBox>
            <Filter
              delay={".1"}
              label="دسته بندی ها"
              onClick={handleClick}
              items={items?.categories}
            >
              <CategoryIcon />
            </Filter>
            <Filter
              delay={".2"}
              label=" تعداد محصول"
              onClick={handleClick}
              items={sortItems}
            >
              <SortByAlphaIcon />
            </Filter>
          </FilterBox>
        )}
      </DashboardRow>
      <TableWrapper>
        <Table headerItems={headerItems}>
          {isLoading && <Spinner />}
          {!isLoading &&
            products.data.products.map((product, idx) => {
              if (filterBy !== "") {
                if (filterBy === product.category) {
                  return (
                    <ProductTableRow
                      key={product?._id}
                      delay={idx}
                      row={idx + 1}
                      product={product}
                      onDelete={handleDelete}
                    />
                  );
                }
              } else {
                return (
                  <ProductTableRow
                    key={product?._id}
                    delay={idx}
                    row={idx + 1}
                    product={product}
                    onDelete={handleDelete}
                  />
                );
              }
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
