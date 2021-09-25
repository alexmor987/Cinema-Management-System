import axios from 'axios';


const login=(authData)=>{
  return  axios.post('http://localhost:5000/api/auth/login',authData);
}
const signup=(userdata)=>{
  return  axios.post('http://localhost:5000/api/signup',userdata);
}
const saveToken=(token)=>{
    sessionStorage["token"]=token;
}
const getToken=()=>{
  return sessionStorage["token"];
}
export default {login,signup,saveToken,getToken}