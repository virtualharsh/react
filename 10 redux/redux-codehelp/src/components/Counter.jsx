import React from 'react'
import { useSelector } from 'react-redux';
import {store}  from '../redux/store';

const Counter = () =>{
    const cnt = useSelector((state)=> state.Counter.value);
    return (
        <div>
            <h2>Counter : {cnt}</h2>
        </div>
    )
}

export default Counter;