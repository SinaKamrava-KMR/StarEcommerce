import { useQuery } from "@tanstack/react-query";
import getProducts from "../services/api/getProducts";
import { useEffect, useState } from "react";

export default function useProduct(defaultPage = 1, limit = 10) {
  const [params, setParams] = useState({ page: defaultPage });
  // const queryClient = useQueryClient();
  const {
    isLoading,
    isFetching,
    refetch,
    data: products,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts({ ...params, limit }),
  });

  useEffect(() => {
    refetch();
  }, [params, refetch]);

  return { isLoading, refetch, isFetching, products, error, setParams };
}
