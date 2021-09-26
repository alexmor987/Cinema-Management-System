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
const saveUserName=(username)=>{
    sessionStorage["username"]=username;
}
const getUserName=()=>{
  return sessionStorage["username"];
}
const getToken=()=>{
  return sessionStorage["token"];
}
const getRole=()=>{
  return sessionStorage["role"];
}
const saveRole=(role)=>{
  sessionStorage["role"]=role;
}
const logout=()=> {
  // remove userData from session storage to log user out
  sessionStorage.removeItem('username');
  sessionStorage.removeItem('token');
  sessionStorage.removeItem('role');
}
export default {login,signup,saveToken,getToken,saveUserName,getUserName,logout,saveRole,getRole}