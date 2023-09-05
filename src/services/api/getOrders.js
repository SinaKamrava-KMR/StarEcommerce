import privateAxios from "../instance/privateAxios";

export default async function getOrders({ page = 1, limit, deliveryStatus }) {
  const query_params = { page };
  if (limit) query_params.limit = limit;
  if (deliveryStatus !== undefined)
    query_params.deliveryStatus = deliveryStatus;

  const res = await privateAxios.get("/orders", {
    params: query_params,
  });

  if (res.data.status !== "success") throw new Error("خطا در اتصال به شبکه");

  return res.data;
}
