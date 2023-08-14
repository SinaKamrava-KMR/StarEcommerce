import { createAsyncThunk } from "@reduxjs/toolkit";
import { USER_AUTH_THUNK_KEY, USER_DATA_THUNK_KEY } from "../../../configs/constants";
import AuthApi from "../../../services/api/authApi";
import getUserData from "../../../services/api/userData";

export const userAuth = createAsyncThunk(
  USER_AUTH_THUNK_KEY,
  async (userData) => {
    const service = new AuthApi();
    const res = await service.Login(userData);
    return res;
  }
);

export const userData = createAsyncThunk(
  USER_DATA_THUNK_KEY,
  async (userId) => {
    const data = await getUserData(userId);
    return data;
  }
);
