import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";

const router = createBrowserRouter([
    {
        path:"/",
        element:<Root></Root>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
            },
            {
                path:"/signin",
                element: <Signin></Signin>,
            },
            {
                path:"/signup",
                element: <Signup></Signup>,
            },
        ]
    }
])
export default router;