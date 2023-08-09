import { Link } from "react-router-dom";
import { styled } from "styled-components";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SignupForm from "../components/signup/SignupForm";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  width: 100%;
  height: 100%;
  gap: 2rem;
  background-color: #ffffff;
`;
const Container = styled.div`
  display: flex;
  background-color: #ffffff;
  border-radius: 1rem;
  border: 1px solid #ececec;
  width: 100%;
  height: fit-content;
  max-width: 550px;
  @media (max-width: 600px) {
    max-width: 98%;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  gap: 1rem;
  font-weight: bold;
  @media (max-width: 600px) {
    margin-top: 20rem;
  }
 
`;
const ButtonTo = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  outline: 0;
  border: 0;
  padding-top: 1rem;
  background-color: transparent;
  font-size: 1.4rem;
  font-weight: lighter;
  transition: all 0.1s ease-in;
  &:hover {
    gap: 1rem;
    color: #1661e2;
  }
`;


function SignUp() {
  return (
    <Wrapper>
      <TitleWrapper>
        <p>به فروشگاه استار خوش امدید</p>
        <ButtonTo>
          <Link to="/" replace>
            بازگشت به سایت
          </Link>
          <KeyboardBackspaceIcon />
        </ButtonTo>
      </TitleWrapper>
      {/* =================================== */}
      <Container>
        <SignupForm />
      </Container>
    </Wrapper>
  );
}

export default SignUp;
