import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/user/userSlice";

import toastReducer from "../reducer/toast/toastSlice";
import categoryReducer from "../reducer/category/categorySlice";
import cartReducer from "../reducer/cart/cartSlice";
import wishlistSlice from "../reducer/wishlist/wishlistSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    categories: categoryReducer,
    cart: cartReducer,
    wishlist: wishlistSlice,
  },
});

export default store;
