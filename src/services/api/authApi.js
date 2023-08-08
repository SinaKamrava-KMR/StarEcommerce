
import {
  AUTH_PARAMS_LOGIN,
} from "../../configs/constants";
import publicAxios from "../instance/publicAxios";

export default class AuthApi {
  async Login(data) {
    try {
      const response = await publicAxios.post(AUTH_PARAMS_LOGIN, data);
     
      if (response.data.status !== "success")
        throw new Error("Your are canot login !!! ");

      return response.data;
    } catch (error) {

      throw new Error("خطای دسترسی , لطفا دورباره امتحان کنید");
    }
  }
}
