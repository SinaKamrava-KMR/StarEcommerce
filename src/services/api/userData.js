import publicAxios from "../instance/publicAxios";

export default async function getUserData(id) {
  const result = await publicAxios.get(`users/${id}`);
  return result.data
}