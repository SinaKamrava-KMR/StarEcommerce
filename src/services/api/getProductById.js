import publicAxios from "../instance/publicAxios";

export async function getProductById(id) {
  const res = await publicAxios.get(`/products/${id}`);
  if (res.data.status !== "success") throw new Error("خطا در اتصال به شبکه");
  return res.data;
}
