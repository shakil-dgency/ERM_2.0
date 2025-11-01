import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false
};

export const toggleSlice = createSlice({
    name:"toggle",
    initialState,

    reducers:{
        setToggle:(state, action)=>{
            state.toggle = action.payload
        }
    }
});

export const {setToggle} = toggleSlice.actions;
export default toggleSlice.reducer