import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css";
import App from './App.jsx'
import {CounterProvider} from './Context/CounterContext.jsx';


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CounterProvider>
            <App />
        </CounterProvider>
    </StrictMode>,
)

document.getElementById("root").classList.add("h-full")