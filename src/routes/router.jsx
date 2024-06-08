import {createBrowserRouter} from "react-router-dom";
import Bank from "./Bank.jsx";
import Navbar from "../components/navbar.jsx";
import MainPage from "./main.jsx";
import AboutPage from "./About.jsx";
import Counter from "./Counter.jsx";
import Login from "./Login.jsx";
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
            },
            {
                path: "/login",
                element: (<Login/>)
            }
        ]}
])

export default router