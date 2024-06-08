import {createBrowserRouter} from "react-router-dom";
import Bank from "./Bank.jsx";
import Navbar from "../components/navbar.jsx";
import MainPage from "./main.jsx";
import AboutPage from "./About.jsx";
import Counter from "./Counter.jsx";
const router =createBrowserRouter([
    {
        path:"/",
        element: (<Navbar/>),
        children:[
            {
                path: "Main",
                element:(<MainPage/>)
            },
            {
                path: "/about",
                element: (<AboutPage/>)
            },
            {
                path:"/bank",
                element: (<Bank/>),
            },
            {
                path: "/counter",
                element: (<Counter/>)
            }
        ]}
])

export default router