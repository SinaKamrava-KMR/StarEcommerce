import { styled } from "styled-components";
import ForwardedInput from "../common/Input";
import PersonIcon from "@mui/icons-material/Person";
import GroupIcon from "@mui/icons-material/Group";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import ReplayIcon from "@mui/icons-material/Replay";
import Row from "../common/Row";
import SeePassIcon from "../common/SeePassIcon";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const Form = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (max-width: 600px) {
    gap: 2rem;
   
  }
`;
const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: #1148de;
`;
const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
`;
const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
`;

function SignupForm() {
  return (
    <Form>
      <Title>ثبت نام</Title>

      <Hr />

      <Row>
        <InputWrapper>
          <ForwardedInput
            label="نام "
            name="firstname"
            rightIcon={<PersonIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
        <InputWrapper>
          <ForwardedInput
            label="نام خانوادگی "
            name="lastname"
            rightIcon={<GroupIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
      </Row>
      <Row>
        <InputWrapper>
          <ForwardedInput
            label="نام کاربری "
            name="username"
            rightIcon={<VerifiedUserIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
        <InputWrapper>
          <ForwardedInput
            label="شماره تماس"
            name="lastname"
            rightIcon={<PhoneIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
      </Row>
      <InputWrapper>
        <ForwardedInput
          label="ادرس"
          name="address"
          rightIcon={<HomeIcon fontSize="large" />}
          isEmpty={true}
        />
      </InputWrapper>
      <Row>
        <InputWrapper>
          <ForwardedInput
            label="رمز عبور"
            name="username"
            leftIcon={<SeePassIcon allow={false} />}
            rightIconClick={() => {}}
            rightIcon={<LockIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
        <InputWrapper>
          <ForwardedInput
            label="تکرار رمز عبور"
            name="lastname"
            leftIcon={<SeePassIcon allow={false} />}
            rightIconClick={() => {}}
            rightIcon={<ReplayIcon fontSize="large" />}
            isEmpty={true}
          />
        </InputWrapper>
      </Row>
      <Button type="submit" active={true}>
        ثبت نام
      </Button>

      <Link to="/auth/user" replace>
        <SubTitle>قبلا ثبت نام کردید ؟</SubTitle>
      </Link>
    </Form>
  );
}

export default SignupForm;
