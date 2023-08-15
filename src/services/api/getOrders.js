import privateAxios from "../instance/privateAxios";


export default async function getOrders() {
  
  const res = await privateAxios.get("/orders");

  if(res.data.status!=="success") throw new Error("خطا در اتصال به شبکه")

  return res.data
}