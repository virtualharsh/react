import { useState, useCallback, useEffect,useRef } from "react"

function App() {

    const [length, setLength] = useState(8);
    const [isNumAllowed, setNumAllowed] = useState(false);
    const [isCharAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState("");
    
    // use ref hook
    const passRef = useRef(null);

    const copyPass = useCallback(()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(password);
    },[password])

    const generatePassword = useCallback(() => {
        let pass = ""
        let str = "ABCDEFGHGKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (isNumAllowed) str += "1234567890";
        if (isCharAllowed) str += "!@#$%^&*()-+";
        for (let i = 1; i <= length; i++) {
            const charIndex = Math.floor(Math.random() * str.length + 1);
            pass += str.charAt(charIndex);
        }
        setPassword(pass);
    }, [length, isNumAllowed, isCharAllowed, setPassword])

    useEffect(() => { generatePassword() },
        [length, isCharAllowed, isNumAllowed, generatePassword])

    return (
        <>
            <div className="relative m-10 flex justify-self-center flex-col w-4/6 h-72 p-5 shadow-md rounded-lg bg-gray-700">
                <h1 className="text-3xl">Password Generator</h1>
                <div className="flex gap-y-10 flex-col mt-5 py-5">
                    <div className="flex">
                        <input type="text" readOnly value={password} ref={passRef} className="w-64 text-black p-2 rounded-l-lg h-10" />
                        <button onClick={copyPass} className="flex justify-center items-center bg-green-500 active:bg-green-700 duration-100 w-auto rounded-r-lg h-10 p-5">Copy</button>
                    </div>
                    <div className="flex gap-x-4 items-start">
                        <div className="flex flex-col">
                            <div className="flex items-center gap-x-3">
                                <label htmlFor="length" className="text-xl">Length Of Password</label>
                                <input type="range" name="length" id="length"
                                    min={8}
                                    max={20}
                                    value={length}
                                    className="cursor-pointer"
                                    onChange={(e) => { setLength(e.target.value) }}
                                />
                            </div>
                            <div>
                                <label htmlFor="length">Length : {length}</label>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mx-24">
                            <input type="checkbox" name="allowNumber" id="allowNumber"
                                defaultChecked={isNumAllowed}
                                onChange={() => setNumAllowed((p) => !p)}
                            />
                            <label htmlFor="allowNumber" className="text-xl">Number</label>
                        </div>
                        <div className="flex items-center gap-2 mx-6">
                            <input type="checkbox" name="allowCharacter" id="allowCharacter"
                                defaultChecked={isCharAllowed}
                                onChange={() => setCharAllowed((p) => !p)}
                            />
                            <label htmlFor="allowCharacter" className="text-xl">Special Characters</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
