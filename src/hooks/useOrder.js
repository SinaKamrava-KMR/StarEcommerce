import { useQuery } from "@tanstack/react-query";
import getOrders from "../services/api/getOrders";

export default function useOrder() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { isLoading, orders, error };
}
