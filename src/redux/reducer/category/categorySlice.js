import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  categories: [],
  subcategories:[]
  
}




const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategories: (state, {payload}) => {
      state.categories = payload
    },
    addSubcategories: (state, {payload}) => {
      state.subcategories = payload
    }
  }
});

export const {addCategories,addSubcategories} = categorySlice.actions

export default categorySlice.reducer