import privateAxios from "../instance/privateAxios";

export async function updateOrder(id, data) {
  try {
    const body = JSON.stringify(data);
    const response = await privateAxios.patch(`/orders/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.data.status !== "success")
      throw new Error("خطا :‌ سفارش  با موفقیت ویرایش  نشد");

    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
}
