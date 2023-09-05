import privateAxios from "../instance/privateAxios";

export default async function getOrders({ page = 1, limit }) {

  const query_params = { page };
  if (limit) query_params.limit = limit;

  const res = await privateAxios.get("/orders", {
    params: query_params,
  });


  if (res.data.status !== "success") throw new Error("خطا در اتصال به شبکه");

  
  return res.data;
}
