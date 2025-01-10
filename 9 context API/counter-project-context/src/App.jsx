import React, { useContext } from 'react'
import CounterManager from './components/CounterManager.jsx';
import Counter from './components/Counter.jsx';

const App = () =>{
    return (
        <>
            <div className='gap-5 h-full flex flex-col justify-center items-center'>
                <Counter />
                <CounterManager /> 
            </div>
        </>
    )
}

export default App;