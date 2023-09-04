import ForwardedInput from "../components/common/Input";
import { useForm } from "react-hook-form";
import {
  TbUserBolt,
  TbUsers,
  TbPhonePause,
  TbCurrentLocation,
  TbCalendarTime,
} from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import StarMap from "../components/common/StarMap";
import StarDatePicker from "../components/common/StarDatePicker";
import { useState } from "react";
import DelivaryDateList from "../components/cart/DelivaryDateList";
import OrderStatus from "../components/cart/OrderStatus";
import {
  Column,
  DateWrapper,
  Form,
  Row,
  SubmitButton,
  Title,
  Wrapper,
} from "../components/cart/PurchaseStyle";
import { useNavigate } from "react-router-dom";
import { useUpdateUser } from "../hooks/useUpdateUser";
import { addDelivery } from "../redux/reducer/cart/cartSlice";
import Cookies from "js-cookie";
import { editUser } from "../redux/reducer/user/userSlice";

const Purchase = () => {
  const [openCalender, setOpenCalender] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate } = useUpdateUser(onSuccess);
  const { name, lastName, address, phoneNumber } = useSelector(
    (state) => state.user
  );

  const initialValues = {
    firstname: name,
    lastname: lastName,
    address,
    phoneNumber,
    deliveryDate: "",
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    setError,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const formsValues = watch();

  const onSub = (data) => {
    const id = Cookies.get("userId");
    delete data.deliveryDate;
    console.log(data);
    mutate({id,data})
  };

  const onSelectAddress = (address) => {
    setValue("address", address);
    setError("address", "");
    console.log(address);
  };

  const handleSelectDate = (date) => {
    console.log(date);
    setValue("deliveryDate", `${date.year}/${date.month}/${date.day}`);
    setError("deliveryDate", "");
    setOpenCalender(false);
  };

  function handlefouces(s) {
    console.log(s);
    setOpenCalender(s);
  }

  function onSuccess(user) {
    dispatch(editUser(user));
    dispatch(
      addDelivery({
        deliveryDate: formsValues.deliveryDate,
        deliveryState: true,
      })
    );
    navigate("/shipping")
  }

  return (
    <Wrapper>
      <OrderStatus state={1} />
      <Title> تکمیل اطلاعات مشتری</Title>
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
                value: /^\d{11}$/,
                message: "فرمت شماره تماس درست نیست ",
              },
            })}
            errorMessage={
              errors?.phoneNumber?.message ? errors.phoneNumber.message : ""
            }
          />
        </Row>
        <Row>
          <StarMap onMap={onSelectAddress} />

          <Column>
            <DateWrapper>
              <ForwardedInput
                name="deliveryDate"
                label="تاریخ تحویل"
                rightIcon={<TbCalendarTime fontSize="large" />}
                isEmpty={
                  formsValues?.deliveryDate == undefined ||
                  formsValues.deliveryDate === ""
                }
                {...register("deliveryDate", {
                  required: {
                    value: true,
                    message: "  تاریخ تحویل نباید خالی باشد",
                  },

                  pattern: {
                    value: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/,
                    message: "فرمت  تاریخ درست نیست ",
                  },
                })}
                errorMessage={
                  errors?.deliveryDate?.message
                    ? errors.deliveryDate.message
                    : ""
                }
                onFocus={handlefouces}
              />

              {openCalender && <StarDatePicker onDate={handleSelectDate} />}
            </DateWrapper>
            <DelivaryDateList onDate={handleSelectDate} />

            <span style={{ flex: 1 }}></span>
            <SubmitButton onClick={handleSubmit(onSub)}>ثبت سفارش</SubmitButton>
          </Column>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default Purchase;
