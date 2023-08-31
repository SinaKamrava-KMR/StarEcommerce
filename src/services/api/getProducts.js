import privateAxios from "../instance/privateAxios";

export default async function getProducts({
  page = 1,
  limit,
  fields,
  sort,
  equalQuantity,
  lowerThanQuantity,
  greaterThanQuantity,
  lowerThanPrice,
  greaterThanPrice,
  category,
  brand,
  
}) {
  const query_params = { page };
  if (limit) query_params.limit = limit;
  if (fields) query_params.fields = fields;
  if (category) query_params.category = category;
  if (brand) query_params.brand = brand;
  if (sort) query_params.sort = sort;
  if (equalQuantity) query_params.quantity = equalQuantity;
  if (lowerThanQuantity) query_params["quantity[lt]"] = lowerThanQuantity;
  if (greaterThanQuantity) query_params["quantity[gt]"] = greaterThanQuantity;
  if (lowerThanPrice) query_params["price[lt]"] = lowerThanPrice;
  if (greaterThanPrice) query_params["price[gt]"] = greaterThanPrice;


  const res = await privateAxios.get("/products", {
    params: query_params,
  });

  if (res.data.status !== "success") throw new Error("خطا در اتصال به شبکه");

  return res.data;
}
