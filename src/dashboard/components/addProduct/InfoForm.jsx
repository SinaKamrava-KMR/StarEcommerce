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
import { useForm, useFormState, useWatch } from "react-hook-form";
import AddProductFooter from "../addProduct/AddProductFooter";
import PropTypes from "prop-types";

import { useSelector } from "react-redux";
import Select from "../../../components/common/Select";
// import { useEffect } from "react";

InfoForm.propTypes = {
  inModal: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  product: PropTypes.object,
};

const Controller = ({ control, register, name, rules, render }) => {
  const props = register(name, rules);
  const value = useWatch({
    control,
    name,
  });
  const { errors } = useFormState({
    control,
    name,
  });
  return render({
    onBlur: props.onBlur,
    name: props.name,
    errors,
    value,
    onChange: (e) => {
      props.onChange({
        target: {
          name,
          value: e,
        },
      });
    },
  });
};



function InfoForm({ inModal = false, onSubmit, product, onReset }) {
  const editorRef = useRef(null);

  let categoriesList = useSelector((state) => state.categories.categories);
  let subcategoriesList = useSelector(
    (state) => state.categories.subcategories
  );

  let initialValues = {
    brand: "",
    category: "",
    name: "",
    price: "",
    quantity: "",
    subcategory: "",
  };

  if (product?.name !== undefined) {
    const { brand, category, name, price, quantity, subcategory } = product;
    initialValues = {
      brand,
      category,
      name,
      price,
      quantity,
      subcategory,
    };
  }

  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    getValues,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });
  const formsValues = watch();

  function onSub(data) {
    if (product?.name !== undefined) {
      const formValues = getValues();
      const changedFields = {};

      for (const field in formValues) {
        if (formValues[field] !== initialValues[field]) {
          changedFields[field] = formValues[field];
        }
      }

      if (
        editorRef.current !== product.description &&
        editorRef.current !== null
      ) {
        
        changedFields["description"] = editorRef.current;
      }

      // reset(changedFields);
      onSubmit(
        {
          ...changedFields,
        },
        product?._id
      );
    } else {
      onSubmit({
        ...data,
        description: editorRef.current,
      });

      editorRef.current = "";
      reset();
    }
  }

  function handleReset(e) {
    e.preventDefault();
    reset({
      brand: "",
      category: "",
      name: "",
      price: "",
      quantity: "",
      subcategory: "",
    });
    const editor = window.tinymce.get("description");
    if (editor) {
      editor.setContent("");
    }
    onReset();
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
          id="description"
          initialValue={product?.description ? product.description : ""}
          init={{
            directionality: "rtl",
            language: "fa",
            placeholder: "توضیحات",
            content_style: 'body { font-family: "IRANSansXV", serif; }',
            font_formats: "IRANSansXV=IRANSansXV,serif",
          }}
          onEditorChange={(content) => (editorRef.current = content)}
        />
      </InfoWrapper>

      <StockWrapper>
        <Typography variant="content_li"> دسته بندی کالا</Typography>
        {/* ======================================================== */}
        <Row>
          <Controller
            {...{
              control,
              register,
              name: "category",
              rules: {
                required: {
                  value: true,
                  message: "فیلد دسته بندی نباید خالی باشد",
                },
              },
              render: (props) => (
                <Select label="دسته بندی" options={categoriesList} {...props} />
              ),
            }}
          />
          <Controller
            {...{
              control,
              register,
              name: "subcategory",
              rules: {
                required: {
                  value: true,
                  message: "فیلد  زیر مجموعه ها نباید خالی باشد",
                },
              },
              render: (props) => (
                <Select
                  label="زیر مجموعه "
                  options={subcategoriesList.filter(
                    (item) => item.category === formsValues.category
                  )}
                  {...props}
                />
              ),
            }}
          />
        </Row>

        <ForwardedInput
          name="brand"
          label="برند"
          isEmpty={formsValues?.brand == undefined || formsValues.brand === ""}
          {...register("brand", {
            required: {
              value: true,
              message: "  برند محصول نباید خالی باشد",
            },
          })}
          errorMessage={errors?.brand?.message ? errors.brand.message : ""}
        />
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

      <AddProductFooter
        inModal={inModal}
        onCancel={handleReset}
        onSubmit={handleSubmit(onSub)}
        text={product?.name !== undefined ? "ویرایش" : "اضافه کردن"}
      />
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
