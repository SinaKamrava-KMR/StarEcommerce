import { styled } from "styled-components";

import PersonIcon from "@mui/icons-material/Person";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import SeePassIcon from "../common/SeePassIcon";
import { useState } from "react";
import Button from "../common/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ForwardedInput from "../common/Input";
import { useDispatch } from "react-redux";

import AuthApi from "../../services/api/authApi";
import { addUser } from "../../redux/reducer/user/userSlice";
const Form = styled.form`
  padding: 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
`;

const Title = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`;
const SubTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  cursor: pointer;
  color: #1148de;
`;
const Hr = styled.div`
  width: 100%;
  height: 1px;
  background-color: #eaeaea;
`;

const InputWrapper = styled.div`
  width: 100%;
  display: flex;
`;

function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useLocation().pathname.split("/").at(-1);
  const title = param === "user" ? "ورود کاربر" : "ورود ادمین";
  const [seePsss, setSeePsss] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  const formsValues = watch();

  function onSub(data) {
    const service = new AuthApi();
    setIsLoading(true);
    service
      .Login(data)
      .then((res) => {
       
        dispatch(addUser(res));
        reset();
        setIsLoading(false);
        if (res.data.user.role === "ADMIN") {
          console.log(res.data.user);
          navigate("/dashboard/orders",{replace:true});
        }
        if (res.data.user.role === "USER") {
          navigate("/account",{replace:true});
        }
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }

  return (
    <Form onSubmit={handleSubmit(onSub)}>
      <Title>{title}</Title>

      <Hr />
      <InputWrapper>
        <ForwardedInput
          label="نام کاربری"
          name="username"
          rightIcon={<PersonIcon fontSize="large" />}
          isEmpty={
            formsValues?.username == undefined || formsValues.username === ""
          }
          {...register("username", {
            required: {
              value: true,
              message: " نام کاربری نباید خالی باشد",
            },
            minLength: {
              value: 3,
              message: "نام کاربری نباید کمتر از ۳ کاراکتر باشد",
            },
          })}
          errorMessage={
            errors?.username?.message ? errors.username.message : ""
          }
        />
      </InputWrapper>

      <InputWrapper>
        <ForwardedInput
          label="رمز ورود"
          name="password"
          type={seePsss ? "text" : "password"}
          rightIcon={<VerifiedUserIcon sx={{ fontSize: "1.8rem" }} />}
          leftIcon={<SeePassIcon allow={seePsss} />}
          rightIconClick={() => setSeePsss((b) => !b)}
          isEmpty={
            formsValues?.password == undefined || formsValues.password === ""
          }
          {...register("password", {
            required: {
              value: true,
              message: "رمز عبور نباید خالی باشد",
            },
            minLength: {
              value: 5,
              message: " رمز عبور نباید کمتر از ۵ کاراکتر باشد",
            },
          })}
          errorMessage={
            errors?.password?.message ? errors.password.message : ""
          }
        />
      </InputWrapper>
      <Button type="submit" active={!isLoading}>
        ورود
      </Button>
      {param === "user" && (
        <Link to="/auth/signup" replace>
          <SubTitle>ایجاد حساب کاربری</SubTitle>
        </Link>
      )}
    </Form>
  );
}

export default LoginForm;
