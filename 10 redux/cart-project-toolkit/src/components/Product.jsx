import React from 'react'

const Product = (props) => {
    return (
        <div className='flex flex-col justify-between gap-3 w-2/12 border-white border-2 p-5 rounded-lg'>
            <img
                className='rounded-lg h-3/4'
                src={props.image}
                alt="No img found" />
            <div>
                <h2>Product Name : {props.productName}</h2>
                <p>Price : {props.price}</p>
                <button
                    className='p-2 rounded-lg hover:bg-green-500 active:bg-green-600 bg-green-400'
                >Add To Cart</button>
            </div>
        </div>
    )
}

export default Product;