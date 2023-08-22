import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  subcategories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, { payload }) => {
      state.categories = payload;
    },
    addCategory: (state, { payload }) => {
      state.categories.unshift(payload);
    },
    updateCategory: (state, { payload }) => {
      state.categories = state.categories.map((item) =>
        item._id === payload._id ? payload : item
      );
    },
    updateSubCategory: (state, { payload }) => {
      state.subcategories = state.subcategories.map((item) =>
        item._id === payload._id ? payload : item
      );
    },
    addSubCategory: (state, { payload }) => {
      state.subcategories.unshift(payload);
    },
    addSubcategories: (state, { payload }) => {
      state.subcategories = payload;
    },
  },
});

export const {
  addCategories,
  updateSubCategory,
  updateCategory,
  addCategory,
  addSubCategory,
  addSubcategories,
} = categorySlice.actions;

export default categorySlice.reducer;
