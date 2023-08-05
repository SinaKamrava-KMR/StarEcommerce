import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const OrdersLayout = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent:"center"
})

function OrdersManagement() {
  return (
    <OrdersLayout>
      <h3>مدیریت کالاها</h3>
    </OrdersLayout>
  );
}

export default OrdersManagement;
