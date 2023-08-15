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

// let fakeProducts = [
//   {
//     id: 123132,
//     row: 0,
//     name: "سینا کامروا",
//     category: "کت و شلوار",
//     price: 2000,
//     quentity: 89,
//   },
//   {
//     id: 132,
//     row: 1,
//     name: " مریم مومن",
//     category: "لباس زنانه",
//     price: 56700,
//     quentity: 9,
//   },
//   {
//     id: 1432,
//     row: 2,
//     name: " غلی حاتمیان",
//     category: " لباس کودک",
//     price: 67500,
//     quentity: 200,
//   },
//   {
//     id: 33223,
//     row: 3,
//     name: "یاسمین بنیادی",
//     category: "لباس زنانه ",
//     price: 635000,
//     quentity: 10,
//   },
//   {
//     id: 9822,
//     row: 4,
//     name: " رضا حقگو",
//     category: "کت و شلوار",
//     price: 986100,
//     quentity: 10,
//   },
//   {
//     id: 9999,
//     row: 5,
//     name: "فاطمه جعفری ",
//     category: "کفش",
//     price: 43312,
//     quentity: 12,
//   },
//   {
//     id: 5545,
//     row: 6,
//     name: "امیر راسخ",
//     category: "کت و شلوار",
//     price: 98000,
//     quentity: 6,
//   },
//   {
//     id: 8970,
//     row: 7,
//     name: "کیارش صیادی",
//     category: " تی شرت",
//     price: 76000,
//     quentity: 3,
//   },
//   {
//     id: 88888,
//     row: 8,
//     name: " رکنا هدایتی",
//     category: " کفش",
//     price: 77600,
//     quentity: 1,
//   },
//   {
//     id: 65467,
//     row: 9,
//     name: " علیرضا محمدی",
//     category: "کت و شلوار",
//     price: 9800,
//     quentity: 6,
//   },
// ];

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
        inputs: [...state.inputs, { id: payload.id, price: payload.price }],
      };

    case "price/removed":
      if (input.quentity)
        return {
          ...state,
          inputs: [
            ...state.inputs.map((item) =>
              item.id === payload.id
                ? { id: item?.id, quentity: item?.quentity }
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
                ? { ...item, quentity: payload.quentity }
                : item
            ),
          ],
        };
      return {
        ...state,
        inputs: [
          ...state.inputs,
          { id: payload.id, quentity: payload.quentity },
        ],
      };

    case "quentity/removed":
      if (input.price)
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
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isLoading, products, setParams } = useProduct();
  function handleClick(item) {
    console.log(item);
    setParams({page:2})
  }
  function handleSave() {
    dispatch({ type: "btn/saved" });
    // fakeProducts = fakeProducts.map((item) => {
    //   const values = state.inputs.find((t) => t.id === item.id);
    //   if (values?.price) return { ...item, price: values.price };
    //   if (values?.quentity) return { ...item, quentity: values.quentity };
    //   return item;
    // });
  }

  // useEffect(() => {
  //   if (state.isSaved) {
  //     setTimeout(() => {
  //       dispatch({ type: "reset" });
  //     }, 1000);
  //   }
  // }, [state.isSaved]);

  return (
    <Wrapper>
      <DashboardRow>
        <Typography variant="DashboardTitle">مدیریت محصولات </Typography>
        <span style={{ flex: 1 }}></span>
        <SaveButton
          active={state.inputs.length > 0}
          onClick={() => handleSave()}
        />
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
          {!isLoading && products.data.products.map((product, idx) => {
            return (
              <TableRow
                key={product?._id}
                delay={idx}
                row={idx + 1}
                product={product}
                state={state}
                dispatch={dispatch}
              />
            );
          })}
         
        </Table>
      </TableWrapper>
      <StarPagination />
    </Wrapper>
  );
}

export default ProductsManagement;
