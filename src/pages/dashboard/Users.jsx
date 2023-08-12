import styled from "@emotion/styled";
import { Box } from "@material-ui/core";

const Wrapper = styled(Box)({
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function Users() {
  return (
    <Wrapper>
      <h1>صفحه مشاهده کاربران</h1>
    </Wrapper>
  );
}

export default Users;
