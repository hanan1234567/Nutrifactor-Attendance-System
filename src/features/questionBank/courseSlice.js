import { createSlice } from "@reduxjs/toolkit";
export const courseSlice=createSlice({
    name:'course',
    initialState:{value:''},
    reducers:{
        change:(state,payload)=>{
            state.course=payload;
        }
    }
})
export const{course}=courseSlice.reducer;
export default courseSlice;