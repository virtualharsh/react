import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
    name:"addToCart",
    initialState : {
        items : []
    },
    reducers:{
        addToCart: (state,action)=>{
            state.items.push(action.payload.props.price); 
        }
    }
})

export const {addToCart} = addToCartSlice.actions;

export default addToCartSlice.reducer;