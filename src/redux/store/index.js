import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/user/userSlice";

import toastReducer from "../reducer/toast/toastSlice";
import categoryReducer from "../reducer/category/categorySlice";
import cartReducer from "../reducer/cart/cartSlice";
import wishlistSlice from "../reducer/wishlist/wishlistSlice";
import brandReducer from "../reducer/brands/brandSlice";
import searchSlice from "../reducer/search/searchSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    categories: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistSlice,
    brands: brandReducer,
    search: searchSlice,
  },
});

export default store;
