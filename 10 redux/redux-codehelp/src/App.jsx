import React from 'react'
import Counter from './components/Counter';
import { useDispatch } from 'react-redux';
import { decrement, increment, reset } from './redux/features/counterSlice';

const App = () => {
    const dispatch = useDispatch();
    return (
        <div className='w-full gap-5 text-2xl h-full flex flex-col justify-center items-center'>
            <Counter />
            <div className='flex gap-3'>
                <button onClick={()=>dispatch(increment())} className='p-2 bg-green-300 rounded-lg text-lg text-black'>Increment</button>
                <button onClick={()=>dispatch(decrement())} className='p-2 bg-red-400 rounded-lg text-lg text-black'>Decrement</button>
                <button onClick={()=>dispatch(reset())} className='p-2 bg-white rounded-lg text-lg text-black'>Reset</button>
            </div>
        </div>
    )
}

export default App;