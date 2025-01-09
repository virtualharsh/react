import { useId, useState } from "react";

function InputBox({
    label,
    amountChange,
    currencyChange,
    currencyOptions = [],
    selectedCurrency,
    amountDisabled = false,
    amount=0,
    className = "",
}) {

    const id = useId()
    const [currency,setCurrency] = useState(selectedCurrency)
    return (
        
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={id} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>

                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    id={id}
                    type="number"
                    value={amount}
                    disabled={amountDisabled}
                    onChange={(e)=>{amountChange && amountChange(e.target.value)}}
                    placeholder="Amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={currency}
                    onChange={(e)=>{currencyChange && currencyChange(e.target.value);4
                        setCurrency(e.target.value)
                    }}
                    
                >

                    {currencyOptions.map((val,index)=>
                        <option key={index} value={val} >
                            {val}
                        </option>
                    )}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
