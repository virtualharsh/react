import { hydrateRoot } from "react-dom/client";
import './index.css'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './root'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import User from './components/User/user'
import getGithubInfo from "./apis/getGithubInfo";



const router = createBrowserRouter([
    {
        path : '/',
        element: <Root/>,
        children: [
            {
                path:"",
                element:<Home/>
            },
            {
                path:"about",
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"user/:id",
                element:<User/>,
                loader : getGithubInfo
            }
        ]
    }
])


// const router = createBrowserRouter(
//     createRoutesFromElements(
//         <Route path='/' element={<Root />}>
//             <Route path='' element={<Home />} />
//             <Route path='/about' element={<About />} />
//             <Route path='/contact' element={<Contact />} />
//         </Route>
//     )
// )



hydrateRoot(document.getElementById("root"), (
    <RouterProvider
        router={router}
        fallbackElement={<div>Loading...</div>}

    />
));

