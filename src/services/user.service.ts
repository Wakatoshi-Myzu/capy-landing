import { http } from "~/lib/http";

export const fetchUsers = async () => {
  return await http.get("/users");
};

export const createUser = async (payload: unknown) => {
  return await http.post("/users", payload);
};

export const updateUser = async (id: string, payload: unknown) => {
  return await http.put(`/users/${id}`, payload);
};

export const deleteUser = async (id: string) => {
  return await http.delete(`/users/${id}`);
};
