import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp() {
    return (
        <h1>My react app</h1>
    )
}


const CustomElement = {
    type: "h1",
    text: "Harsh",
}

const Func = () => {
    return CustomElement
}

const ReactElement = React.createElement("h1", {}, "Hii")

const Element = (<h1>Hii World</h1>)


createRoot(document.getElementById('root')).render(
    // ✅
    // MyApp() // This will work as render expects a function that returns a html 
    // <MyApp/> // This will also work as render converts tags to function calls and creates an element
    // Element // Directly converts Element to react element and displays it
    // ReactElement // This will work because we are giving direct ReactElement 

    // ❌
    // CustomElement // Objects are not valid to render 
    // Func() // react elements need specific type of html elements to be converted into objects user-defined objects do not work

    <App />
)
