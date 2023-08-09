import styled from "@emotion/styled";
import { Box } from "@material-ui/core";
import { Typography } from "@mui/material";
import AddProductFooter from "../../dashboard/components/addProduct/AddProductFooter";

const Wrapper = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "2.5rem 3rem",
  backgroundColor: "#f6f6f6",
  gap: "2rem",
  "@media (max-width:900px)": {
    padding: "1.5rem 1rem",
  },
});

function AddProduct() {
  return (

      <Wrapper>
      <Typography variant="DashboardTitle">اضافه کردن محصول جدید</Typography>
      <AddProductFooter />
      </Wrapper>

  );
}

export default AddProduct;
