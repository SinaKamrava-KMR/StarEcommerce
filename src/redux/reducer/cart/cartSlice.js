import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  message: "",
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
      } 
    },
    initCart: (state, { payload }) => {
      state.products = payload;
    },
  },
});

export const { addProduct, initCart } = cartSlice.actions;

export default cartSlice.reducer;
