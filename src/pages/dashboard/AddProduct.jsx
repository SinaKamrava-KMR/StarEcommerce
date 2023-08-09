import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const Wrapper = styled(Box)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function AddProduct() {
  return (
    <Wrapper>
      <h1>صفحه  اضافه کردن محصول</h1>
    </Wrapper>
  );
}

export default AddProduct;