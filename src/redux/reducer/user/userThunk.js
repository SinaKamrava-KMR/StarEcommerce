import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_AUTH_THUNK_KEY } from "../../../configs/constants";
import AuthApi from "../../../services/api/authApi";

export const userAuth = createAsyncThunk(
  USER_AUTH_THUNK_KEY,
  async (userData) => {
    const service = new AuthApi();
    const res = await service.Login(userData);
    return res;
  }
);
