import { Typography } from "@material-ui/core";
import ForwardedInput from "../../../components/common/Input";
import { InfoWrapper, StockWrapper } from "../../common/FormWrappers";
import styled from "@emotion/styled";

import 'react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill";
import { useState } from "react";


const Form = styled("form")({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  padding: "1.5rem",
  gridRow: "span 2",
  height: "410px",
  overflowY: "scroll",
  "&::-webkit-scrollbar": {
    display: "none",
  },
});

function InfoForm() {
  const [value, setValue] = useState('');

    // const [body,setBody] = useState("")
  return (
    <Form>
      <InfoWrapper>
        <Typography variant="content_li"> مشخصات اولیه کالا</Typography>
        <ForwardedInput label="عنوان کالا" />
        <ReactQuill
            id='editor'
            style={{
                background: "#D6F0CC",
                color: "black"
            }}
            theme="snow"
            value={value}
            onChange={() => {
                console.log(document.getElementsByClassName("ql-editor")[0].innerHTML)
                setValue()
            }}
        />
          
        
       
      </InfoWrapper>

      <StockWrapper></StockWrapper>
    </Form>
  );
}

export default InfoForm;
