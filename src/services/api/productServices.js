import axios from "axios";
import privateAxios from "../instance/privateAxios";

export default class ProductServices {
  async add(data) {
    try {
      const response = await privateAxios.post("/products", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status !== "success")
        throw new Error(
          "   خطا: امکان اضافه کردن این محصول وجود ندارد لطفا دوباره تلاش کنید   "
        );

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async delete(id) {
    try {
      const response = await privateAxios.delete(`/products/${id}`);

      if (response.data.status !== "success")
        throw new Error(
          "   خطا: امکان  حذف کردن  این محصول وجود ندارد لطفا دوباره تلاش کنید   "
        );

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async update(data, id) {
    try {
      const response = await privateAxios.patch(`/products/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status !== "success")
        throw new Error(
          "   خطا: امکان  ویرایش این محصول وجود ندارد لطفا دوباره تلاش کنید   "
        );

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

  async updateQueue(list_of_data) {
    try {
      const requestQueue = list_of_data.map((request) => {
        const id = request.id;
        delete request.id;
        return axios.patch(`http://localhost:8000/api/products/${id}`, request);
      });

     
      if (requestQueue.length === 0)
        throw new Error("هیچ لیستی از درخواست یافت نشد");

      return await Promise.all(requestQueue);
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
