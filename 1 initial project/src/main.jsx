import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Para from './Para.jsx'

createRoot(document.getElementById('root')).render(
    // This is called fragment <> </>
    <> 
        <App/>
        <Para/>
    </>
)
