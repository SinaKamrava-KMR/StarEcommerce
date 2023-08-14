import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../services/api/categoryApi";

export async function useCategory() {

  const {
    isLoading,
    data: {
      data: { categories },
    },
    error,
  } = useQuery({
    queryKey: ["category"],
    queryFn: getCategories,
  });

  return { isLoading, error, categories };
}
