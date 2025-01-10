import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext';


const Counter = () =>{
    const {cnt,setCnt} = useContext(CounterContext);
    return (
        <div>
            <h1 className='text-2xl'>Counter : {cnt}</h1>
        </div>
    )
}

export default Counter;