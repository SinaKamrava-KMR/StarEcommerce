import axios from "axios";
import { BASE_URL } from "../../configs/constants";

const privateAxios = axios.create({
  baseURL: BASE_URL,
});


// check some validation for request 
privateAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
  }
);




// check some validation for response 
privateAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error);
  }
);

export default privateAxios;
