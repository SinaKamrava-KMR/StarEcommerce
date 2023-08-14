import publicAxios from "../instance/publicAxios";

export default async function refresh(token) {
  const response = await publicAxios.post("/auth/token", {
    refreshToken: token,
  });

  return response.data;
}
