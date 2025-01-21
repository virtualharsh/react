import { configureStore } from "@reduxjs/toolkit";
import addToCartReducer from "./features/addToCartSlice";
export const store = configureStore({
    reducer: {
        addToCart : addToCartReducer,
        
    },
})