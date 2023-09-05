import privateAxios from "../instance/privateAxios";

export async function createOrder(data) {
  try {

    const requestBody = JSON.stringify(data);
    const response = await privateAxios.post("/orders", requestBody, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.status !== "success")
      throw new Error("خطا  در برقراری ارتباط با سرور‌  ");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
