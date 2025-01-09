import React, { useEffect, useState } from 'react'
import InputBox from './components/';
import useCurrencyInfo from './hooks/useCurrencyInfo';


const App = () => {
    const [amount,setAmount] = useState(0)
    const [from,setFrom] = useState("usd")
    const [to,setTo] = useState("inr")
    const [result,setResult] = useState(0)
    
    const currencyInfo = useCurrencyInfo(from) 
    const options = Object.keys(currencyInfo)
    
    const convert = () =>{
        if (amount) {
            setResult(amount*currencyInfo[to])
        }else{
            setResult(0);
        }
    }

    useEffect(convert,[from,to,amount])

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                amountChange = {(amount)=>setAmount(amount)}
                                selectedCurrency = {from}
                                currencyOptions = {options}
                                currencyChange = {(curr)=>{setFrom(curr)}}

                            />
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={result}
                                selectedCurrency= {to}
                                currencyOptions={options}
                                currencyChange={(curr) => { setTo(curr) }}
                                amountDisabled = {true}
                            />
                        </div>
                        <button type="submit" onClick={convert} className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;