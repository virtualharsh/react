import { useState } from "react";

function App() {

    const [counter,setCounter] = useState(0)

    const increment = () => {
        setCounter(counter+1);
        console.log(counter);
        
    }

    const decrement = () => {
        setCounter(counter-1)
    }

    const reset = () => {
        setCounter(0)
    }

    return (
        <>
            <h1>Counter App</h1>

            <h2>Counter Value : {counter}</h2>

            <button
                onClick={increment}
            >Inc</button>

            <br /><br />

            <button
                onClick={decrement}
            >Dec</button>\

            <br /><br />

            <button
                onClick={reset}
            >Reset</button>
        </>
    )
}

export default App
