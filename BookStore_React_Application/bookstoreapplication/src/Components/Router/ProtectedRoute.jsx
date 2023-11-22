import React from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute=({child})=>{
if(localStorage.getItem("token")){
    return child;
}
return <Navigate to="/"/>;
}

