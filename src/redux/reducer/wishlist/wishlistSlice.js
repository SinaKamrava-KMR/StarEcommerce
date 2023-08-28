import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addFavoriteProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    removeFavoriteProduct: (state, { payload }) => {
      state.products = state.products.filter((item) => item._id !== payload.id);
    },
  },
});

export const { addFavoriteProduct, removeFavoriteProduct } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
