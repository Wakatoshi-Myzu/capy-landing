import { useSuspenseQuery, useMutation } from "@tanstack/react-query";
import { fetchUsers, createUser } from "~/services/user.service";

export const useGetUsers = () => {
  return useSuspenseQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
};

export const useCreateUser = () => {
  return useMutation({
    mutationFn: createUser,
  });
};
