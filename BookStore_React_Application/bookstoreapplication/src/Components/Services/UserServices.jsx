import axios from 'axios';

export const Login= async(obj)=>{
    const response =await axios.post("https://localhost:",obj);
    console.log("signIn api ",response);
    return response;    
}

export const Register=async(obj)=>{
    let response =await axios.post("https://localhost:",obj);
    console.log("signup api ",response);
    return response;
};
