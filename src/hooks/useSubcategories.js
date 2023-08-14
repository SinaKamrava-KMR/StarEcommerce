import { useQuery } from "@tanstack/react-query";
import { getSubcategories } from "../services/api/categoryApi";

export async function useSubcategories() {
  const {
    isLoading,
    data: {
      data: { subcategories },
    },
    error,
  } = useQuery({
    queryKey: ["subcategories"],
    queryFn: getSubcategories,
  });

  return { isLoading, error, subcategories };
}
