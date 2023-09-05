import privateAxios from "../instance/privateAxios";

export default async function getUsers() {
  try {
    const res = await privateAxios.get(`/users`);
    if (res.data.status !== "success") {
      throw new Error("خطا در اتصال به شبکه");
    }
    return res.data;
  } catch (error) {
    throw new Error("خطا در دریافت محصول با شناسه موردنظر");
  }
}
