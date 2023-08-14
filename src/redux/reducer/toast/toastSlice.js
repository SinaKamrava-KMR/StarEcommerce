import { createSlice } from "@reduxjs/toolkit";


const initialState={
  visible: false,
  message: "",
  status: "success",
}


const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    show: (state,{payload}) => {
      state.visible = true;
      state.message = payload.message;
      state.status = payload.status;
    },
    hide: (state) => {
      state.visible = false;
      state.message = "";
      state.status = "";
    }
    
  }
})



export const {show,hide} = toastSlice.actions

export default toastSlice.reducer