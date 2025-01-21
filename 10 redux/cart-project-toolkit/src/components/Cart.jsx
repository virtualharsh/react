import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () =>{
    const state = useSelector(state => state.addToCart.items);
    console.log(state);
    return (
        <div className='py-10 flex flex-col items-center justify-center text-2xl'>
            <h2>Items : {state.length==0 ? 0 : state.length} </h2>
            <h3>Price : {state.reduce((sum, item) => sum + item, 0)}</h3>
        </div>
    )
}

export default Cart;