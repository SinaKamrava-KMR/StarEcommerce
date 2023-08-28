import { useQuery } from "@tanstack/react-query";
import { getProductById } from "../services/api/getProductById";
import { useEffect } from "react";

export function useProductById(id) {
  const {
    isLoading,
    data: product,
    error,
    refetch,
  } = useQuery(["product", id], getProductById, {
    enabled: false,
  });

  useEffect(() => {
    refetch(); // Trigger the query with the new ID
  }, [id, refetch]);


  return { isLoading, product, error };
}
