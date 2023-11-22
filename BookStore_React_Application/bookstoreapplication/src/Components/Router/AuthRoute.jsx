import React from "react";
import { Navigate } from "react-router-dom";

export const AuthRoute=({child})=>{
if(localStorage.getItem("Token")===undefined || localStorage.getItem("Token")===null){
    console.log("false");
    return child;
}
return <Navigate to='/'/>
}