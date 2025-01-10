import React, { useContext } from 'react'
import { CounterContext } from '../Context/CounterContext';

const CounterManager = () =>{
    const {cnt,setCnt} = useContext(CounterContext);
    
    return (
        <div className='flex gap-5'>
            <button className='flex justify-center font-semibold items-center text-black p-3 bg-green-300 rounded-lg'
                onClick={()=>setCnt(cnt+1)}
            >Increment</button>
            <button className='flex justify-center font-semibold items-center text-black p-3 bg-red-400 rounded-lg'
                onClick={() => setCnt(cnt - 1)}
            >Decrement</button>
        </div>
    )
}

export default CounterManager;