import React, { useState } from "react";
import logo from "../Assets/LoginLogo.png"
import '../SignUp/SignUp.css'
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import {CustomerRegistration } from "../Services/UserServices";
const validFirstName = new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
const validLastName = new RegExp('^[A-Za-z]{1,}$');
const validPhoneNumber = new RegExp('^[0-9]{10}$');
const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');


export default function SignUp() {

    const [data, setData] = useState({ FirstName: " ", LastName: " ", PhoneNumber: " ", Email: " ", Password: " " })
    const [validateObj, SetValidateObj] = useState({ firstNameBorder: false, firstNameHelper: '', lastNameBorder: false, lastNameHelper: '', PhoneNumberBorder: false, PhoneNumberhelper: '', EmailBorder: false, EmailHelper: '', passBorder: false, passHelper: '' })
    const handleFirstName = (e) => {
        setData(prevState => (
            {
                ...prevState,
                FirstName: e.target.value
            }
        ))
    }
    const handleLastName = (e) => {
        setData(prevState => ({
            ...prevState,
            LastName: e.target.value
        }))
    }
    const handleEmail = (e) => {
        setData(prevState => ({
            ...prevState,
            Email: e.target.value
        }))
    }
    const handlPhoneNumber = (e) => {
        setData(prevState => ({
            ...prevState,
            PhoneNumber: e.target.value
        }))
    }
    const handlePassword = (e) => {
        setData(prevState => ({
            ...prevState,
            Password: e.target.value,
            EmailHelper: e.target.value
        }))
    }
    const verifySignUpData = async () => {
        let checkFirstName = validFirstName.test(data.FirstName)
        let checkLastName = validLastName.test(data.LastName)
        let checkPhoneNumber = validPhoneNumber.test(data.PhoneNumber)
        let checkEmail = validEmail.test(data.Email)
        let checkpassword = validPassword.test(data.Password)


        if (checkFirstName === false) {
            SetValidateObj(prevState => ({
                ...prevState,
                 firstNameBorder:true,
                //firstNameBorder: checkFirstName ? true : false,
                firstNameHelper: 'FirstName Should start with Capital letter'
            }))
        }
        if (checkLastName === false) {
            SetValidateObj(prevState => ({
                ...prevState,
                lastNameBorder: true,
                lastNameHelper: 'LastName sholud contain one character atleast'
            }))
        }
        if (checkPhoneNumber === false) {
            SetValidateObj(prevState => ({
                ...prevState,
                PhoneNumberBorder: true,
                PhoneNumberhelper: 'Phone Number sholud be 10 Numbers'
            }))
        }
        if (checkEmail === false) {
            SetValidateObj(prevState => ({
                ...prevState,
                EmailBorder: true,
                EmailHelper: 'Enter Valid Email'
            }))
        }
        if (checkpassword === false) {
            SetValidateObj(prevState => ({
                ...prevState,
                passBorder: true,
                passHelper: 'Password Should be 8 char'
            }))
        }
        console.log(data);

        if (checkFirstName === true && checkLastName === true && checkPhoneNumber === true && checkEmail === true && checkpassword === true) {
            //let response;
           let response=await CustomerRegistration(data);
            // if (selectedRole === "Admin") {
            //   response = await AdminRegistration(data);
            // } else if (selectedRole === "Customer") {
            //   response = await CustomerRegistration(data);
            // }
            console.log("Registartion")
            console.log(response);
        }
    }

    return (
        <div className="main-container">
            <div className="main">
                <div className="leftpart">
                    <div><img src={logo} alt="logo" ></img> </div>
                    <div><h3>ONLINE BOOK SHOPPING</h3></div>
                </div>
                <div className="rightpart">
                    <div className="buttons">
                        <div><Link className="upbtn" to="/">LOGIN</Link></div>
                        <div className="upbtn">SIGNUP</div>
                    </div>
                    {/* <div className="reg">
                        <input type="radio" id="admin" name="role" value="Admin" checked={selectedRole === "Admin"} onChange={handleRoleChange}></input>
                        <label htmlFor="admin" >Admin</label>
                        <input type="radio" id="customer" name="role" value="Customer" checked={selectedRole === "Customer"} onChange={handleRoleChange}></input>
                        <label htmlFor="customer" >Customer</label>
                    </div> */}
                    <div className="fname">
                        <TextField className="ffname" id="name" label="FirstName" onChange={handleFirstName} error={validateObj.firstNameBorder} helperText={validateObj.firstNameHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="lname">
                        <TextField className="llname" id="name" label="LastName" onChange={handleLastName} error={validateObj.lastNameBorder} helperText={validateObj.lastNameHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="fphone">
                        <TextField className="ffphone" id="phone" label="PhoneNumber" onChange={handlPhoneNumber} error={validateObj.PhoneNumberBorder} helperText={validateObj.PhoneNumberhelper} variant="outlined" size="small" required />
                    </div>
                    <div className="femail">
                        <TextField className="email" id="phone" label="Email" onChange={handleEmail} error={validateObj.EmailBorder} helperText={validateObj.EmailHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="fpass">
                        <TextField className="passw" id="phone" label="password" onChange={handlePassword} error={validateObj.passBorder} helperText={validateObj.passHelper} variant="outlined" size="small" required />
                    </div>
                    <div className="button-sin">
                        <Button href="/dashboard" type="submit" className="flogin" onClick={verifySignUpData}>SignUp</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}