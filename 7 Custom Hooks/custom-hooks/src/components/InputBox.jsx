import { React, useEffect, useId } from "react";


function InputBox({
    label,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    amount="",
    selectedCurrency = "usd",
    className = "",
}) {
    const amountInputId = useId()

    


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e)=> onAmountChange && onAmountChange(e.target.value)}
                />
            </div>
            
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency}
                    onChange={(e) => {
                        if (onCurrencyChange) {
                            onCurrencyChange(e.target.value); // Update the parent state
                        }else{
                            console.log("error");
                            
                        }
                    }}
                >
                    {currencyOptions.map((currency) => (
                        <option value={currency} key={currency}>
                            {currency.toUpperCase()}
                        </option>
                    ))}
                </select>

            </div>
        </div>
    );
}

export default InputBox;
