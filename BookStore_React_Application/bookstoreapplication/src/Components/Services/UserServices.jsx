import axios from 'axios';

export const Login= async(obj)=>{
    const response =await axios.post("https://localhost:44334/api/Customer/Login",obj);
    console.log("signIn api ",response);
    return response;    
}

export const AdminRegistration=async(obj)=>{
    let response =await axios.post("https://localhost:44334/api/Admin/AdminRegistration",obj);
    console.log("Admin signup api ",response);
    return response;
};

export const CustomerRegistration=async(obj)=>{
    let response=await axios.post("https://localhost:44334/api/Customer/CustomerRegistration",obj);
    console.log("Customer Signup api",response);
    return response;
}

export const FetchAllBooks=async()=>{
    let response=await axios.post("https://localhost:44334/api/Product/GetAllBooks");
    console.log("Fetched All Books",response);
    return response;
}

export const FetchBookById=async()=>{
    let response=axios.post("");
    console.log("",response);
    return response;
}
