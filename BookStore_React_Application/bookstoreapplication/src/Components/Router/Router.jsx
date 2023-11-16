import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export const Router=()=>{
return(
    <div>
        <BrowserRouter>
          <Routes>
             <Route exact path={"/signin"} element={<SignIn/>}></Route>
             <Route exact path={"/signup"} element={<SignUp/>} ></Route>
          </Routes>
        </BrowserRouter>
    </div>
)}