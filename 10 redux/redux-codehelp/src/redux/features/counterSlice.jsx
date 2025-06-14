import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value:0
    },
    reducers:{
        // actions increment, decrement, reset
        increment: state => {
            state.value += 1
        },
        decrement: state =>{
            state.value -= 1
        },
        reset : state=>{
            state.value = 0;
        }
    }
})

// Action creators are generated for each case reducer function
export const {increment,decrement,reset} = counterSlice.actions;

export default counterSlice.reducer;