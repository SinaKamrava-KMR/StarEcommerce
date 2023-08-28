import publicAxios from "../instance/publicAxios";

export async function getCategories() {
  try {
    const response = await publicAxios.get("/categories?page=1&limit=1000");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}

export async function getSubcategories() {
  try {
    const response = await publicAxios.get("/subcategories?page=1&limit=1000");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
