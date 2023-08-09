import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const Wrapper = styled(Box)({
  height:"100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
});

function ProductsManagement() {
  return (
    <Wrapper>
      <h1>صفحه مدیریت محصولات </h1>
    </Wrapper>
  )
}

export default ProductsManagement