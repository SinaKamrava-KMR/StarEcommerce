import publicAxios from "../instance/publicAxios";

export  async function getCategories() {
  try {
    const response = await publicAxios.get("/categories");


    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}


export  async function getSubcategories() {
  try {
    const response = await publicAxios.get("/subcategories");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
