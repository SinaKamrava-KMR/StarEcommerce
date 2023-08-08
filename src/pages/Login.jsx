// import { useDispatch } from "react-redux";
import { styled } from "styled-components";
// import { userAuth } from "../redux/reducer/user/userThunk";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

function Login() {
  // const dispatch = useDispatch();

  // function handleLoginBtn() {
  //   dispatch(
  //     userAuth({
  //       username: "admin",
  //       password: "admin1234",
  //     })
  //   );
  // }

  return (
    <Wrapper>
      {
        <img
          style={{ width: "500px", height: "500px" }}
          src="/public/Fingerprint.svg"
        />
      }
    </Wrapper>
  );
}

export default Login;
