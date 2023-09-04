import privateAxios from "../instance/privateAxios";

export async function updateUser(id, data) {
  try {
    const requestBody = JSON.stringify(data);
    const response = await privateAxios.patch(`/users/${id}`, requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.status !== "success")
      throw new Error(" خطا در برقراری ارتباط ");

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}
