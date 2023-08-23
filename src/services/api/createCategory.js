import privateAxios from "../instance/privateAxios";

export  async function createCategory(data) {
  try {
    const response = await privateAxios.post("/categories", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.status !== "success")
      throw new Error(
        "خطا :‌ دسته بندی با موفقیت اضافه نشد"
      );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}