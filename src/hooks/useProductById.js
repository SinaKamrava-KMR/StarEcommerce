import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/api/getProductById";

export function useProductById(id) {
  const {
    isLoading,
    data: product,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProductById(id),
  });

  return { isLoading, product, error };
}
