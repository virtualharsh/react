import React from 'react'
import Cart from './components/Cart'
import Product from './components/Product'
import products from '../products.json'

const App = () => {
    return (
        <div>
            <Cart />
            <div className='flex px-10 gap-14 flex-wrap justify-start'>
                {
                    products.map((product, index) => (
                        <Product key={index} {...product}/>
                    ))
                }
            </div>
        </div>
    )
}

export default App;