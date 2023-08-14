import axios from "axios";
import { BASE_URL } from "../../configs/constants";

const publicAxios = axios.create({
  baseURL: BASE_URL,
});

// check some validation for request
// publicAxios.interceptors.request.use(
//   (config) => {
//     return config;
//   },
//   (error) => {
//     console.log(error);
//   }
// );

publicAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error.data);
  }
);

export default publicAxios;
