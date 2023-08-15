import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/api/getProducts";
import { useState } from "react";

export default function useProduct() {
  const [params, setParams] = useState({ page: 1 });

  const {
    isLoading,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(params),
  });

  return { isLoading, products, error, setParams };
}
