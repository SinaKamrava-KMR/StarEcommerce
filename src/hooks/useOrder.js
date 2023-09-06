import { useQuery } from "@tanstack/react-query";
import getOrders from "../services/api/getOrders";
import { useEffect, useState } from "react";

export default function useOrder(defaultPage = 1, limit = 10) {
  const [params, setParams] = useState({ page: defaultPage, limit });
  // const queryClient = useQueryClient();

  const {
    isLoading,
    data: orders,
    refetch,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn:()=> getOrders({ ...params }),
  });

  useEffect(() => {
    refetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  return { isLoading, orders, error,setParams };
}
