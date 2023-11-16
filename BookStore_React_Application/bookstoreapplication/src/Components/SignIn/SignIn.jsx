import React, { useState } from "react";
import logo from "../Assets/LoginLogo.png";
import './SignIn.css'
import {Button,TextField} from "@mui/material";
import SignUp from "../SignUp/SignUp";
import { Router } from "../Router/Router";


export default function SignIn(){

    const [logindata,setLoginData]=useState({email:'',password:''});
    const handleEmail=(e)=>{
        setLoginData(prevState=>(
            {
                ...prevState,
                email:e.target.value
            }
        ))
    }
    const handlePassword=(p)=>{
        setLoginData(prevState=>({
            ...prevState,
            password:p.target.value
        }))
    }
    const [toggle,setToggle]=useState(true);
    const handleToggle=()=>{
        setToggle(!toggle)
    }
    
     {
        return(
            <div className="main-container">
                <div className="main">
                    <div className="leftpart">
                        <div><img src={logo} alt="logo" ></img> </div>
                        <div><h3>ONLINE BOOK SHOPPING</h3></div>
                    </div>
                    <div className="rightpart">
                        <div className="buttons">
                            <div><h4 className="flogin" onClick={handleToggle} variant="text">LOGIN</h4></div>
                            <div><h4 className="fsignup" onClick={handleToggle} variant="text">SIGNUP</h4></div>
                        </div>
                        <div className="log-email">
                          <TextField className="std-box" id="email" label="Email" onChange={handleEmail} variant="outlined" size="small" required />
                        </div>
                        <div className="log-pass">
                          <TextField className="std-box" id="password" label="Password" onChange={handlePassword} variant="outlined" size="small" required />
                        </div>
                        <div className="button-sin">
                            <Button className="flogin" >Login</Button>
                        </div>
                        <div className="or">
                             <p><b>------OR-----</b></p>
                        </div>
                        <div className="option">
                            <div className="admin-button">
                                <button class="button button1">Facebook</button>
                            </div>
                            <div className="customer-button">
                                <button class="button button1">Google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}