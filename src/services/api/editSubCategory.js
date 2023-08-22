import publicAxios from "../instance/publicAxios";

export async function editSubCategory(id, data) {
  try {

    console.log(data)
    const response = await publicAxios.patch(`/subcategories/${id}`, data);

    if (response.data.status !== "success")
      throw new Error("خطا :‌  زیر مجموعه با موفقیت ویرایش  نشد");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
