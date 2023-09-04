import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  message: {
    message: "",
    status: "",
  },
  deliveryDate: "",
  deliveryState: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const result = state.products.find((item) => item?._id === payload?._id);
      if (!result) {
        state.products.push(payload);
        localStorage.setItem("cart", JSON.stringify(state.products));
        state.message.message = "به سبد خرید اضافه شد";
        state.message.status = "success";
      } else {
        state.message.message = "در سبد خرید وجود دارد";
        state.message.status = "error";
      }
    },
    updateProduct: (state, { payload }) => {
      state.products = state.products.map((product) =>
        product._id === payload._id ? payload : product
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteProducts: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => !payload.includes(product._id)
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    initCart: (state, { payload }) => {
      state.products = payload;
      state.message.message = "";
      state.message.status = "";
    },
    addDelivery: (state, { payload })=> {
      state.deliveryDate = payload.deliveryDate;
      state.deliveryState = payload.deliveryState;
    },
    cleanMessage: (state) => {
      state.message.message = "";
      state.message.status = "";
    },
  },
});

export const {
  addProduct,
  initCart,
  cleanMessage,
  updateProduct,
  addDelivery,
  deleteProducts,
} = cartSlice.actions;

export default cartSlice.reducer;
