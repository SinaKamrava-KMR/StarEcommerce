import { createSlice } from "@reduxjs/toolkit";
// import { userAuth } from "./userThunk";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
} from "../../../configs/constants";
import Cookies from "js-cookie";

const initialState = {
  isLoading: false,
  message: "",
  name: "",
  lastName: "",
  userName: "",
  address: "",
  phoneNumber: "",
  role: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      // eslint-disable-next-line no-unused-vars
      state = initialState;
      Cookies.remove(ACCESS_TOKEN_KEY, { path: "/auth" });
      Cookies.remove(REFRESH_TOKEN_KEY, { path: "/auth" });
    },

    addUser: (state, { payload }) => {
      state.isLoading = false;
      // set accessToken and refreshToken on cookies
      Cookies.set(ACCESS_TOKEN_KEY, payload.token.accessToken, {
        path: "/auth",
      });
      Cookies.set(REFRESH_TOKEN_KEY, payload.token.refreshToken, {
        path: "/auth",
      });

      const { firstname, lastname, username, phoneNumber, address, role } =
        payload.data.user;
      state.message = "شما با موفقیت وارد شدید";
      state.name = firstname;
      state.lastName = lastname;
      state.userName = username;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.role = role;
      
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(userAuth.pending, (state) => {
  //     state.isLoading = true;
  //   });

  //   builder.addCase(userAuth.fulfilled, (state, { payload }) => {

  //     state.isLoading = false;
  //     // set accessToken and refreshToken on cookies
  //     Cookies.set(ACCESS_TOKEN_KEY, payload.token.accessToken, {
  //       path: "/auth",
  //     });
  //     Cookies.set(REFRESH_TOKEN_KEY, payload.token.refreshToken, {
  //       path: "/auth",
  //     });

  //     const { firstname, lastname, username, phoneNumber, address, role } =
  //       payload.data.user;
  //     state.message = "شما با موفقیت وارد شدید";
  //     state.name = firstname;
  //     state.lastName = lastname;
  //     state.userName = username;
  //     state.phoneNumber = phoneNumber;
  //     state.address = address;
  //     state.role = role;

  //   });

  //   builder.addCase(userAuth.rejected, (state, { error }) => {
  //     state = { ...initialState, message: error.message };
  //     state.isLoading = false;
  //     Cookies.remove(ACCESS_TOKEN_KEY, { path: "/auth" });
  //     Cookies.remove(REFRESH_TOKEN_KEY, { path: "/auth" });
  //     console.log(state);
  //   });
  // },
});

export const { logout, addUser } = userSlice.actions;
export default userSlice.reducer;
