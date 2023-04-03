import { useContext } from "react";
import {LoginContext} from "../Context/LoginContext";
import { Navigate } from "react-router-dom";

function PrivateRoute({children}){
    const{loginstate}=useContext(LoginContext);

    if(!loginstate.isLogin){
        return(<Navigate to="/register"/>)
    }
    return children;

}

export default PrivateRoute;