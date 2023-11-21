import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import DashBoard from "../DashBoard/DashBoard";

export const Router=()=>{
return(
    <div>
        <BrowserRouter>
          <Routes>
             <Route exact path={"/"} element={<SignIn/>}></Route>
             <Route exact path={"/signup"} element={<SignUp/>} ></Route>
             <Route exact path={"/dashboard"} element={<DashBoard/>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
)}