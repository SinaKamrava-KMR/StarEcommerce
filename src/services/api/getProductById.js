import publicAxios from "../instance/publicAxios";

export async function getProductById(id) {
  try {
    const { queryKey } = id;
    const res = await publicAxios.get(`/products/${queryKey.at(-1)}`);
    if (res.data.status !== "success") {
      throw new Error("خطا در اتصال به شبکه");
    }
    return res.data.data.product;
  } catch (error) {
    throw new Error("خطا در دریافت محصول با شناسه موردنظر");
  }
}
