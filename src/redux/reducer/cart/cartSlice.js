import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  message: {
    message: "",
    status: "",
  },
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
    initCart: (state, { payload }) => {
      state.products = payload;
      state.message.message = "";
      state.message.status = "";
    },
    cleanMessage: (state) => {
      state.message.message = "";
      state.message.status = "";
    },
  },
});

export const { addProduct, initCart, cleanMessage } = cartSlice.actions;

export default cartSlice.reducer;
