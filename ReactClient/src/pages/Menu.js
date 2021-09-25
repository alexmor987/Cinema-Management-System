import { useEffect } from "react";
import authSrv from '../services/auth';
import Navbar from "../components/Navbar";
import LoginComp from '../pages/Login'
import {Switch, Route } from "react-router-dom";

function MenuComp(props) {
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <Navbar/>
    <Switch>
      <Route exact path="/" component={LoginComp} />
      <Route path="/movies" component={LoginComp} />
      <Route path="/subscriptions" component={LoginComp} />
      <Route path="/usersmanagement" component={LoginComp} />
    </Switch>
  </div>
  );
}

export default MenuComp;