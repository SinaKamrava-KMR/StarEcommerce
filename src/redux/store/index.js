import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/user/userSlice";

import toastReducer from "../reducer/toast/toastSlice";
import categoryReducer from "../reducer/category/categorySlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
    categories :categoryReducer
  },
});

export default store;
