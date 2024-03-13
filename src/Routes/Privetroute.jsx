import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../API/useAuth";
import Loader from "../Components/Loader";
const Privetroute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) {
        return <Loader></Loader>;
    }
    if (user) {
        return children;

    }
    return <Navigate state={location.pathname} to='/signin'></Navigate>

};

export default Privetroute;