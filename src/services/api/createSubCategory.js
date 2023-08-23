// import privateAxios from "../instance/privateAxios";
import publicAxios from "../instance/publicAxios";

export  async function createSubCategory(data) {
  try {

    const response = await publicAxios.post("/subcategories", data);

    if (response.data.status !== "success")
      throw new Error(
        "خطا :‌  زیر مجموعه با موفقیت اضافه نشد"
      );

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}