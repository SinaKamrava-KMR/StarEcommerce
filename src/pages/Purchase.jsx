import { styled } from "styled-components";
import ForwardedInput from "../components/common/Input";
import { useForm } from "react-hook-form";
import {
  TbUserBolt,
  TbUsers,
  TbPhonePause,
  TbCurrentLocation,
} from "react-icons/tb";
import { useSelector } from "react-redux";

const Wrapper = styled.div`
  width: 60%;
  height: 100vh;
  margin-top: 10rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  overflow: auto;

  /* width*/
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #d1d1d19a;
    border-radius: 10px;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #616264;
    border-radius: 10px;
  }
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 1.8rem;
`;
const Row = styled.div`
  display: flex;
  gap: 3rem;
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Purchase = () => {
  const user = useSelector(state => state.user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formsValues = watch();

  function onSub(data) {
    console.log(data);
  }

  return (
    <Wrapper>
      <Title>نهایی کردن خرید</Title>
      <Form>
        <Row>
          <ForwardedInput
            name="firstname"
            label="نام"
            rightIcon={<TbUserBolt fontSize="large" />}
            isEmpty={
              formsValues?.firstname == undefined ||
              formsValues.firstname === ""
            }
            {...register("firstname", {
              required: {
                value: true,
                message: " نام  نباید خالی باشد",
              },
              minLength: {
                value: 1,
                message: "نام  نباید کمتر از ۱ کاراکتر باشد",
              },
            })}
            errorMessage={
              errors?.firstname?.message ? errors.firstname.message : ""
            }
          />
          <ForwardedInput
            name="lastname"
            label="نام خانوادگی"
            rightIcon={<TbUsers fontSize="large" />}
            isEmpty={
              formsValues?.lastname == undefined || formsValues.lastname === ""
            }
            {...register("lastname", {
              required: {
                value: true,
                message: " نام خانوادگی  نباید خالی باشد",
              },
              minLength: {
                value: 3,
                message: "نام خانوادگی نباید کمتر از ۳ کاراکتر باشد",
              },
            })}
            errorMessage={
              errors?.lastname?.message ? errors.lastname.message : ""
            }
          />
        </Row>
        <Row>

        <ForwardedInput
            name="address"
            label="ادرس"
            rightIcon={<TbCurrentLocation fontSize="large" />}
            isEmpty={
              formsValues?.address == undefined || formsValues.address === ""
            }
            {...register("address", {
              required: {
                value: true,
                message: "فیلد ادرس  نباید خالی باشد",
              },
            })}
            errorMessage={
              errors?.address?.message ? errors.address.message : ""
            }
          />


          <ForwardedInput
            name="phoneNumber"
            label="شماره تماس"
            rightIcon={<TbPhonePause fontSize="large" />}
            isEmpty={
              formsValues?.phoneNumber == undefined ||
              formsValues.phoneNumber === ""
            }
            {...register("phoneNumber", {
              required: {
                value: true,
                message: " شماره تماس   نباید خالی باشد",
              },
              minLength: {
                value: 11,
                message: "شماره تماس  نباید کمتر از ۱۱ عدد باشد",
              },
              pattern: {
                value: /^\d{10}$/,
                message: "فرمت شماره تماس درست نیست ",
              },
            })}
            errorMessage={
              errors?.phoneNumber?.message ? errors.phoneNumber.message : ""
            }
          />



          
        </Row>
      </Form>
    </Wrapper>
  );
};

export default Purchase;
