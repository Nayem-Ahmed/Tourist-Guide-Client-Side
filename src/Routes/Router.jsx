import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import Privetrout from "../Routes/Privetroute"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/signin",
                element: <Signin></Signin>,
            },
            {
                path: "/signup",
                element: <Signup></Signup>,
            },
        ]
    },
    {
        path: '/dashboard',
        element: <Privetrout><Dashboard></Dashboard></Privetrout>,
        children: [
            {

            }

        ],
    }
])
export default router;