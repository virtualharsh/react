import { createContext, useState } from "react";

export const  CounterContext = createContext(null);

export const CounterProvider = (props) =>{
    const [cnt,setCnt] = useState(0);
    return (
        <CounterContext.Provider value={{cnt,setCnt}}>
            {props.children}
        </CounterContext.Provider>
    )
}