import { configureStore } from "@reduxjs/toolkit";

import userReducer from "../reducer/user/userSlice";

import toastReducer from "../reducer/toast/toastSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    toast: toastReducer,
  },
});

export default store;
