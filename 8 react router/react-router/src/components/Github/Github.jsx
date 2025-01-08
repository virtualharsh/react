import React from 'react'
import { useLoaderData } from 'react-router-dom';

const Github = ({data}) =>{
    console.log(data);
    
    return (
        <div className='w-full px-44 py-20 flex justify-evenly'>
            <div className='w-96'>
                <img className='rounded-lg shadow-2xl shadow-black' src={data.avatar_url} alt="" />
            </div>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl'>Username : {data.login}</h1>
                <p className='text-3xl'>Github Followers : {data.followers}</p>
            </div>
        </div>
    )
}

export default Github;