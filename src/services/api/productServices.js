import privateAxios from "../instance/privateAxios";

export default class ProductServices {
  async add(data) {
    try {

      //TODO: we should change this 
      let currentData = {
        ...data,
        subcategory: "64db28596e488759aa74fe98",
      };



      const response = await privateAxios.post("/products", currentData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status !== "success")
        throw new Error("   خطا: امکان اضافه کردن این محصول وجود ندارد لطفا دوباره تلاش کنید   ");

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
