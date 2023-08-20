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

  async delete(id) {
    
    try {
      const response = await privateAxios.delete(`/products/${id}`);

      if (response.data.status !== "success")
        throw new Error("   خطا: امکان  حذف کردن  این محصول وجود ندارد لطفا دوباره تلاش کنید   ");

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }


  }

  async update(data,id) {
    try {

      const response = await privateAxios.patch(`/products/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (response.data.status !== "success")
        throw new Error("   خطا: امکان  ویرایش این محصول وجود ندارد لطفا دوباره تلاش کنید   ");

      return response.data;
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  }

}
