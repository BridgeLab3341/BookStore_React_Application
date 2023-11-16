import React, { useState } from "react";
import logo from "../Assets/LoginLogo.png";
import './SignIn.css'
import {Button,TextField} from "@mui/material";
import { Link } from "react-router-dom";
import { Login } from "../Services/UserServices";
const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');


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
    const [validateObj,setValidateObj]=useState({EmailBorder:false,EmailHelper:'',PasswordBorder:false,PasswordHelper:''})
    const VerifyeSignInData=async()=>{
        let checkEmail=validEmail.test(logindata.email)
        let checkpassword=validPassword.test(logindata.password)
    
        if(checkEmail===false){
            setValidateObj(prevState=>({
                ...prevState,
                EmailBorder:true,
                EmailHelper:'Enter a Valid Email'
            }))
        }
        if(checkpassword === false){
            setValidateObj(prevState=>({
                ...prevState,
                PasswordBorder: true,
                PasswordHelper:'Password Sholud be atleast 8 characters'
            }))
        }
        console.log(logindata);

        if(checkEmail===true && checkpassword===true){
            let response=await Login(logindata)
            console.log(response);
        }
    }
    return(
        <div className="main-container">
            <div className="main">
                <div className="leftpart">
                    <div><img src={logo} alt="logo" ></img> </div>
                    <div><h3>ONLINE BOOK SHOPPING</h3></div>
                </div>
                <div className="rightpart">
                    <div className="buttons">
                    <div className="flogin">LOGIN</div>
                    <div><Link className="fsignup" to="/signup">SIGNUP</Link></div>
                        {/* <div><h4 className="flogin"  variant="text">LOGIN</h4></div> */}
                        {/* <div><h4 className="fsignup" onClick={props.handleToggle} variant="text">SIGNUP</h4></div> */}
                        {/* <div><Link className="flogin" to="/SignUp">SIGNUP</Link></div> */}
                    </div>
                    <div className="log-email">
                      <TextField className="std-box" id="email" label="Email" onChange={handleEmail} error={validateObj.EmailBorder} helperText={validateObj.EmailHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="log-pass">
                      <TextField className="std-box" id="password" label="Password" onChange={handlePassword} error={validateObj.PasswordBorder} helperText={validateObj.PasswordHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="button-sin">
                        <Button onClick={VerifyeSignInData} className="flogin">Login</Button>
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


