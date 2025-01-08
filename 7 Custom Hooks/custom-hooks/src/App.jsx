import React, { useState,useEffect } from 'react'
import { InputBox } from './components';
import useCurrencyInfo from './hooks/useCurrencyInfo';


const App = () => {

    const [amount, setAmount] = useState(0);
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("inr");
    const [resultAmount, setResultAmount] = useState("0");

    const currencyInfo = useCurrencyInfo(from);
    const options = Object.keys(currencyInfo);

    const swap = () => {
        setFrom(to);
        setTo(from);
        setResultAmount(amount);
        setAmount(amount);
    }

    const getResult = () => {
        if (currencyInfo && currencyInfo[to]) {
            setResultAmount(amount * currencyInfo[to]);
        } else {
            setResultAmount(0); 
        }
    };

    useEffect(()=>{getResult()},[amount,from,to])

    return (
        <div
            className="w-ful text-black h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            getResult();
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={options}
                                onCurrencyChange={(currency)=>setAmount(amount)}
                                selectedCurrency={from}
                                onAmountChange={(amount)=>setAmount(amount)}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount={resultAmount}
                                currencyOptions={options}
                                onCurrencyChange={(currency) => setTo(currency)}
                                selectCurrency={from}
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                        onClick={getResult}>
                            Convert {from.toUpperCase()} "to" {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;