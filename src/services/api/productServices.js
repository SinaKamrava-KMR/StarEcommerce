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
        throw new Error("   خطا: امکان اضافه کردن این محصول وجود ندارد لطفا دوباره تلاش کنید   ");

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }
}
