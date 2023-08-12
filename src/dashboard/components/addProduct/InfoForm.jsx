import { Typography } from "@material-ui/core";
import ForwardedInput from "../../../components/common/Input";
import {
  Form,
  InfoWrapper,
  Row,
  StockWrapper,
} from "../../common/FormWrappers";
import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import AddProductFooter from "../addProduct/AddProductFooter";

function InfoForm() {
  const editorRef = useRef(null);
  // editorRef.current.getContent()
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();
  const formsValues = watch();

  function onSubmit(data) {
    console.log(data);
    editorRef.current = "";
    reset();
  }

  return (
    <Form>
      <InfoWrapper>
        <Typography variant="content_li"> مشخصات اولیه کالا</Typography>
        {/* ======================================================== */}
        <ForwardedInput
          name="name"
          label="عنوان کالا"
          isEmpty={formsValues?.name == undefined || formsValues.name === ""}
          {...register("name", {
            required: {
              value: true,
              message: " نام محصول نباید خالی باشد",
            },
            minLength: {
              value: 3,
              message: "نام محصول نباید کمتر از ۳ کاراکتر باشد",
            },
          })}
          errorMessage={errors?.name?.message ? errors.name.message : ""}
        />
        {/* ======================================================== */}
        <Editor
          init={{
            directionality: "rtl",
            language: "fa",
            placeholder: "توضیحات",
            content_style: 'body { font-family: "IRANSansXV", serif; }',
            font_formats: "IRANSansXV=IRANSansXV,serif",
          }}
          onInit={(evt, editor) => (editorRef.current = editor)}
        />
      </InfoWrapper>

      <StockWrapper>
        <Typography variant="content_li"> دسته بندی کالا</Typography>
        {/* ======================================================== */}
        <Row>
          <ForwardedInput
            name="category"
            label="دسته بندی"
            isEmpty={
              formsValues?.category == undefined || formsValues.category === ""
            }
            {...register("category", {
              required: {
                value: true,
                message: " دسته بندی محصول نباید خالی باشد",
              },
            })}
            errorMessage={
              errors?.category?.message ? errors.category.message : ""
            }
          />
          <ForwardedInput
            name="subcategory"
            label="زیرمجموعه"
            isEmpty={
              formsValues?.subcategory == undefined ||
              formsValues.subcategory === ""
            }
            {...register("subcategory", {
              required: {
                value: true,
                message: "زیرمجموعه نباید خالی باشد",
              },
            })}
            errorMessage={
              errors?.subcategory?.message ? errors.subcategory.message : ""
            }
          />
        </Row>
      </StockWrapper>

      <StockWrapper>
        <Typography variant="content_li"> قیمت و تعداد </Typography>
        {/* ======================================================== */}
        <Row>
          <ForwardedInput
            name="price"
            label="قیمت"
            isEmpty={
              formsValues?.price == undefined || formsValues.price === ""
            }
            {...register("price", {
              required: {
                value: true,
                message: "  قیمت محصول نباید خالی باشد",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "(فرمت انگلیسی)لطفا عدد وارد کنید",
              },
            })}
            errorMessage={errors?.price?.message ? errors.price.message : ""}
          />
          <ForwardedInput
            name="quantity"
            label="تعداد محصول"
            isEmpty={
              formsValues?.quantity == undefined || formsValues.quantity === ""
            }
            {...register("quantity", {
              required: {
                value: true,
                message: "مقدار تعداد محصول نباید خالی باشد",
              },
              pattern: {
                value: /^[0-9]+$/,
                message: "(فرمت انگلیسی)لطفا عدد وارد کنید",
              },
            })}
            errorMessage={
              errors?.quantity?.message ? errors.quantity.message : ""
            }
          />
        </Row>
      </StockWrapper>

      <AddProductFooter onSubmit={handleSubmit(onSubmit)} />
    </Form>
  );
}

export default InfoForm;

// "product": {
//   "category": "64ca4e676a508df5d29b6b2c",
//   "subcategory": "64ca4e8c6a508df5d29b6b32",
//   "name": "iPhone tyhkgjlhg",
//   "price": 1000,
//   "quantity": 23,
//   "brand": "apple",
//   "description": "maybe good phone",
//   "thumbnail": "products-thumbnails-default.jpeg",
//   "images": [
//       "products-images-default.jpeg"
//   ],
//   "rating": {
//       "rate": 0,
//       "count": 0
//   },
//   "_id": "64d7825ec3591a7ddbe60eac",
//   "createdAt": "2023-08-12T13:00:14.650Z",
//   "updatedAt": "2023-08-12T13:00:14.650Z",
//   "slugname": "iphone-tyhkgjlhg",
//   "__v": 0
// }
