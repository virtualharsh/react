import { useState, useEffect } from "react"

const useCurrencyInfo = (currency) =>{

    const [data,setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res)=> res.json())
        .then((res)=> setData(res[currency]))
        .catch(()=> {console.log("Unable to get the data");})
    },[currency])
    
    return data;
}


export default useCurrencyInfo;