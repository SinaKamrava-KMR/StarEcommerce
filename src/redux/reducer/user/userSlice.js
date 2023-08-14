import { createSlice } from "@reduxjs/toolkit";
// import { userAuth } from "./userThunk";
import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  USER_ID,
} from "../../../configs/constants";
import Cookies from "js-cookie";
import { userData } from "./userThunk";

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
      // Cookies.remove(ACCESS_TOKEN_KEY, { path: "/auth" });
      // Cookies.remove(REFRESH_TOKEN_KEY, { path: "/auth" });
      Cookies.remove(ACCESS_TOKEN_KEY);
      Cookies.remove(REFRESH_TOKEN_KEY);
    },

    addUser: (state, { payload }) => {
      state.isLoading = false;

      const {
        _id: userId,
        firstname,
        lastname,
        username,
        phoneNumber,
        address,
        role,
      } = payload.data.user;
      state.message = "شما با موفقیت وارد شدید";
      state.name = firstname;
      state.lastName = lastname;
      state.userName = username;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.role = role;

      // set accessToken and refreshToken on cookies
      Cookies.set(ACCESS_TOKEN_KEY, payload.token.accessToken);
      Cookies.set(REFRESH_TOKEN_KEY, payload.token.refreshToken);
      Cookies.set(USER_ID, userId);
    },
  },
  
  extraReducers: (builder) => {

    builder.addCase(userData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(userData.fulfilled, (state, { payload }) => {
      const { firstname, lastname, username, phoneNumber, address, role } =
        payload.data.user;
      state.message = "شما با موفقیت وارد شدید";
      state.name = firstname;
      state.lastName = lastname;
      state.userName = username;
      state.phoneNumber = phoneNumber;
      state.address = address;
      state.role = role;
      state.isLoading = false;
      console.log(payload);
    });

    builder.addCase(userData.rejected, (state, { error }) => {
      state = { ...initialState, message: error.message };
      state.isLoading = false;
      console.log(error.message);
    });
  },
});

export const { logout, addUser } = userSlice.actions;
export default userSlice.reducer;
