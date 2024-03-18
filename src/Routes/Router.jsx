import { createBrowserRouter } from "react-router-dom";
import Root from "../LayOut/Root";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import Privetrout from "../Routes/Privetroute"
import MyBooking from "../LayOut/Dashboard/MyBooking";
import AddPackage from "../LayOut/Dashboard/AddPackage";
import PackageDetails from "../Pages/Home/PackageDetails";
import Profile from "../LayOut/Dashboard/Profile";
import ManageUser from "../LayOut/Dashboard/ManageUser";
import MyWishlist from "../LayOut/Dashboard/MyWishlist";
import ContactUs from "../Pages/Home/ContactUs";
import TourtypesDetails from "../Pages/Home/TourtypesDetails";
import AboutUs from "../Pages/Home/AboutUs";
import TourTypeDataDetails from "../Pages/Home/TourTypeDataDetails";
import Blog from "../Pages/Home/Blog";
import BlogDetails from "../Pages/Home/BlogDetails";
import BlogNavbar from "../Pages/Home/BlogNavbar";
import Privetroute from "../Routes/Privetroute";

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
                path: "/packageDetails/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/addpackage/${params.id}`),
                element: <Privetroute><PackageDetails></PackageDetails></Privetroute>,
            },
            {
                path: "/tourtypedetails/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/addpackage/${params.id}`),
                element: <Privetrout><TourtypesDetails></TourtypesDetails></Privetrout>,
            },
            {
                path: "/tourtypedetails/:id/tourtype-Datatadetails/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/addpackage/${params.id}`),
                element: <Privetrout><TourTypeDataDetails></TourTypeDataDetails></Privetrout>,
            },
            {
                path: "/contactus",
                element: <ContactUs></ContactUs>,
            },
            {
                path: "/aboutus",
                element: <AboutUs></AboutUs>,
            },
            {
                path: "/blogs",
                element: <BlogNavbar></BlogNavbar>,
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
                path:"/dashboard/mybookings",
                element:<MyBooking></MyBooking>,
            },
            {
                path:"/dashboard/addpackage",
                element:<AddPackage></AddPackage>,
            },
            {
                path:"/dashboard/manageusers",
                element: <ManageUser></ManageUser>,
            },
            {
                path:"/dashboard/mywishlist",
                element: <MyWishlist></MyWishlist>,
            },
            {
                path:"/dashboard/profile",
                element: <Profile></Profile>,
            },

        ],
    }
])
export default router;