import { useQuery } from "@tanstack/react-query";
import getUsers from "../services/api/getUsers";

export function useUsers() {
  
  const {
    isLoading,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  return {isLoading,users}

}