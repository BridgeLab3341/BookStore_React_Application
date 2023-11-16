import React,{useState} from "react";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

export default function DashBoard() {
    const [toggle,setToggle] = useState(true);
    const handleToggle=()=>{
        setToggle(!toggle)
    };
    return(
        <div>
            { toggle ? <SignIn handleToggle={handleToggle}/> : <SignUp handleToggle={handleToggle}/> }
        </div>
    );
}