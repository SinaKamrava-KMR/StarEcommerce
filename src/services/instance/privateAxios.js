import axios from "axios";
import {
  ACCESS_TOKEN_KEY,
  BASE_URL,
  REFRESH_TOKEN_KEY,
} from "../../configs/constants";
import Cookies from "js-cookie";
import refresh from "../api/refresh";

const privateAxios = axios.create({
  baseURL: BASE_URL,
  transformRequest: [
    (data, headers) => {
      if (
        headers["Content-Type"] &&
        headers["Content-Type"].startsWith("multipart/form-data")
      ) {
        const form = new FormData();
        for (const key in data) {
          const value = data[key];

          if (Array.isArray(value)) {
            value.forEach((v) => {
              form.append(key, v);
            });
          } else {
            form.append(key, value);
          }
        }

        return form;
      }

      return data;
    },
  ],
});


// check some validation for request
privateAxios.interceptors.request.use(
  (config) => {
    const accessToken = Cookies.get(ACCESS_TOKEN_KEY);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// check some validation for response
privateAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    // save out config : we need out orginal config for send request again
    const originalConfig = error.config;

    //we dont have _retry property on orginalConfing we set that for notice this prosse jus one time execute
    if (error.response?.status === 500 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        //get refresh token from cookie
        const currentRefreshToken = Cookies.get(REFRESH_TOKEN_KEY);
        //send request to get new access token
        const res = await refresh(currentRefreshToken);
        const accessToken = res.token?.accessToken;
        // if we get new access token successfully we should save that to cookie and then send resuest again
        if (accessToken) {
          Cookies.set(ACCESS_TOKEN_KEY, accessToken);
          return privateAxios(originalConfig);
        }
      } catch (error) {
        return Promise.reject(error);
      }
    } else {
      console.log(error);
      return Promise.reject(error);
    }
  }
);

export default privateAxios;
