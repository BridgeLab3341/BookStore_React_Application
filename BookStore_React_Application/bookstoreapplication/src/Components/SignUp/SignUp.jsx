import React from "react";
import logo from "../Assets/LoginLogo.png"
import '../SignUp/SignUp.css'
import { Button, TextField } from "@mui/material";

export default function SignUp() {
    return (
        <div className="main-container">
            <div className="main">
                <div className="leftpart">
                    <div><img src={logo} alt="logo" ></img> </div>
                    <div><h3>ONLINE BOOK SHOPPING</h3></div>
                </div>
                <div className="rightpart">
                    <div className="buttons">
                      <div><h4 className="flogin" onClick={"gh"} variant="text">LOGIN</h4></div>
                      <div><h4 className="fsignup" onClick={"gg"} variant="text">SIGNUP</h4></div>
                    </div>
                    <div className="reg">
                        <input type="radio" id="html" name="fav" value="Admin"></input>
                        <label for="admin" >Admin</label>
                        <input type="radio" id="html" name="fav" value="Customer"></input>
                        <label for="customer" >Customer</label>
                    </div>
                    <div className="fname">
                        <TextField className="ffname" id="name" label="FirstName" onChange={"fdd"} variant="outlined" size="small" required />
                        <TextField className="lname" id="name" label="LastName" onChange={"fdd"} variant="outlined" size="small" required />
                    </div>
                    <div className="fphone">
                      <TextField className="phone" id="phone" label="PhoneNumber" onChange={"fdd"} variant="outlined" size="small" required />
                    </div>
                    <div className="femail">
                      <TextField className="email" id="phone" label="Email" onChange={"fdd"} variant="outlined" size="small" required />
                    </div>
                    <div className="fpass">
                      <TextField className="passw" id="phone" label="password" onChange={"fdd"} variant="outlined" size="small" required />
                    </div>
                    <div className="button-sin">
                        <Button className="flogin" onClick={"sdds"} >SignUp</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}