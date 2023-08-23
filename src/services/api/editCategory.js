import privateAxios from "../instance/privateAxios";

export  async function editCategory(id,data) {
  try {
    console.log(data);
    const response = await privateAxios.patch(`/categories/${id}`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.data.status !== "success")
      throw new Error(
        "خطا :‌ دسته بندی با موفقیت ویرایش  نشد"
      );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}