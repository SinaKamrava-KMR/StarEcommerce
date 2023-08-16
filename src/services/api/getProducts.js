import privateAxios from "../instance/privateAxios";

export default async function getProducts({
  page = 1,
  limit,
  fields,
  sort,
  equalQuantity,
  lowerThanQuantity,
  greaterThanQuantity,
}) {
  const query_params = { page };
  if (limit) query_params.limit = limit;
  if (fields) query_params.fields = fields;
  if (sort) query_params.sort = sort;
  if (equalQuantity) query_params.quantity = equalQuantity;
  if (lowerThanQuantity) query_params["quantity[lt]"] = lowerThanQuantity;
  if (greaterThanQuantity) query_params["quantity[gt]"] = greaterThanQuantity;

  

  const res = await privateAxios.get("/products", {
    params: query_params,
  });

  if (res.data.status !== "success") throw new Error("خطا در اتصال به شبکه");

  return res.data;
}
