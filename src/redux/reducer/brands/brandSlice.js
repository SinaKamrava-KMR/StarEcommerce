import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  brands: [],
};

const brandsSlice = createSlice({
  name: "brands",
  initialState,
  reducers: {
    addBrands: (state, { payload }) => {
      state.brands = payload;
    },
  },
});


export const { addBrands } = brandsSlice.actions;

export default brandsSlice.reducer