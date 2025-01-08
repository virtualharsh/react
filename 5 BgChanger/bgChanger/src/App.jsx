import { useState } from 'react'


function App() {
    const [color, setColor] = useState(0);

    const changeColor = () => {
        const selectedColor = document.getElementById("color").value;
        setColor(selectedColor);
    }

    return (
        <>
            <div className='w-full h-full bg-black flex gap-3 justify-center items-center flex-col'
            style={{backgroundColor:color}}>
                <label htmlFor="color" className='text-white font-medium text-xl'>Choose the color </label>
                <input type="color" name="choose-color" id="color" className='w-28 h-14 rounded-lg border-black bg-white  border-2 p-1' />
                <button className='p-3 bg-green-500 font-bold w-28 text-wrap'
                onClick={changeColor}
                >Change</button>
            </div>
        </>
    )
}

export default App
