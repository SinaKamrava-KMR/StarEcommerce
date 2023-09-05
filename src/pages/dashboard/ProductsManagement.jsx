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
import { useReducer } from "react";
import useProduct from "../../hooks/useProduct";
import Spinner from "../../components/common/Spinner";
import useFilterItems from "../../hooks/filter/useFilterItems";
import { useState } from "react";
import { HiMiniFunnel } from "react-icons/hi2";
import useDeleteProduct from "../../hooks/useDeleteProduct";
import Loading from "../../components/common/Loading";
import { useSearchParams } from "react-router-dom";
import ProductServices from "../../services/api/productServices";
import { useQueryClient } from "@tanstack/react-query";
import { show } from "../../redux/reducer/toast/toastSlice";
import { useDispatch } from "react-redux";

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
const sortPriceItems = [
  {
    tag: "sort",
    label: "بیشترین قیمت",
    value: "-price",
  },
  {
    tag: "sort",
    label: "کمترین قیمت",
    value: "price",
  },
];

const initialState = {
  inputs: [],
  isSaved: false,
};

const reducer = (state, action) => {
  const { payload } = action;
  const input = state.inputs.find((item) => item.id === payload?.id);

  switch (action.type) {
    case "price/chnaged":
      if (input)
        return {
          ...state,
          inputs: [
            ...state.inputs.map((item) =>
              item.id === payload.id ? { ...item, price: payload.price } : item
            ),
          ],
        };
      return {
        ...state,
        inputs: [...state.inputs, { id: payload.id, price: payload?.price }],
      };

    case "price/removed":
      if (input?.quantity)
        return {
          ...state,
          inputs: [
            ...state.inputs.map((item) =>
              item.id === payload.id
                ? { id: item?.id, quantity: item?.quantity }
                : item
            ),
          ],
        };
      return {
        ...state,
        inputs: [...state.inputs.filter((item) => item.id !== payload.id)],
      };
    case "quentity/chnaged":
      if (input)
        return {
          ...state,
          inputs: [
            ...state.inputs.map((item) =>
              item.id === payload.id
                ? { ...item, quantity: payload?.quantity }
                : item
            ),
          ],
        };
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { id: payload.id, quantity: payload?.quantity },
        ],
      };

    case "quentity/removed":
      if (input?.price)
        return {
          ...state,
          inputs: [
            ...state.inputs.map((item) =>
              item.id === payload.id
                ? { id: item?.id, price: item?.price }
                : item
            ),
          ],
        };

      return {
        ...state,
        inputs: [...state.inputs.filter((item) => item.id !== payload.id)],
      };

    case "btn/saved":
      return { ...state, isSaved: true };

    case "reset":
      return { inputs: [], isSaved: false };
    default:
      throw new Error("Unknown Action type !!!");
  }
};

function ProductsManagement() {
  const dispatchToast = useDispatch();
  const [state, dispatch] = useReducer(reducer, initialState);
  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, products, setParams } = useProduct(
    searchParams.get("page")
  );

  const { items, isLoading: isFiltering } = useFilterItems();
  const [filterBy, setFilterBy] = useState("");
  const { isDeleting, deleteProduct } = useDeleteProduct();
  const queryClient = useQueryClient();
  
  function handleClick(item) {
    if (item?.tag) {
      setParams((params) => ({ ...params, [item.tag]: item.value }));
    } else {
      setFilterBy(item.value);
    }
  }

  function handleSave() {
    console.log(state);

    dispatch({ type: "btn/saved" });

    if (state.inputs.length > 0) {
      const service = new ProductServices();

      service
        .updateQueue(state.inputs)
        .then((res) => {
          queryClient.invalidateQueries({
            queryKey: ["products"],
          });

          dispatchToast(
            show({
              message: "محصول با موفقیت اپدیت شد",
              status: "success",
            })
          );
          console.log(res);
        })
        .catch((error) => {
          dispatchToast(
            show({
              message: "خطا در هنگام  اپدیت محصول ",
              status: "error",
            })
          );
          console.log(error);
        })
        .finally(() => {
          dispatch({ type: "reset" });
        });
    }
  }

  function handleChangePage(page) {
    setParams({ page });
    setSearchParams({ page });
  }

  function handleDelete(id) {
    deleteProduct(id);
  }

  return (
    <Wrapper>
      {state.isSaved && <Loading />}
      {isDeleting && <Loading />}
      <DashboardRow>
        <Typography variant="DashboardTitle">مدیریت محصولات </Typography>
        <span style={{ flex: 1 }}></span>
        <SaveButton
          active={state.inputs.length > 0}
          onClick={() => handleSave()}
        />
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
              label=" قیمت محصول"
              onClick={handleClick}
              items={sortPriceItems}
            >
              <SortByAlphaIcon />
            </Filter>
            <Filter
              delay={".3"}
              label=" تعداد محصول"
              onClick={handleClick}
              items={sortItems}
            >
              <HiMiniFunnel />
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
                    <TableRow
                      key={product?._id}
                      delay={idx}
                      row={idx + 1}
                      product={product}
                      state={state}
                      dispatch={dispatch}
                      onDelete={handleDelete}
                    />
                  );
                }
              } else {
                return (
                  <TableRow
                    key={product?._id}
                    delay={idx}
                    row={idx + 1}
                    product={product}
                    state={state}
                    dispatch={dispatch}
                    onDelete={handleDelete}
                  />
                );
              }
            })}
        </Table>
      </TableWrapper>
      <StarPagination
        defualtPage={+searchParams.get("page")}
        count={products?.total_pages}
        onChange={handleChangePage}
      />
    </Wrapper>
  );
}

export default ProductsManagement;
