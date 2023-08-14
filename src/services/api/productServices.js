import privateAxios from "../instance/privateAxios";

export default class ProductServices {
  async add(data) {
    try {

      //TODO: we should change this 
      let currentData = {
        ...data,
        category: "64ca4e676a508df5d29b6b2c",
        subcategory: "64ca4e8c6a508df5d29b6b32",
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
