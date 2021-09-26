import { useEffect } from "react";
import authSrv from '../services/auth';
import Navbar from "../components/Navbar";
import LoginComp from '../pages/Login';
import MoviesComp from '../pages/Movies';
import SubscriptionsComp from '../pages/Subscriptions';
import UsersManagementComp from '../pages/UsersManagement';
import {Switch, Route } from "react-router-dom";
import {useRouteMatch} from 'react-router-dom';
function MenuComp(props) {
  
  let { path, url} = useRouteMatch()
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <Navbar url={url}/>
    <Switch>
          <Route exact path="/" component={LoginComp} />

          <Route path={ path + "/movies" }>
              <MoviesComp />
          </Route>

          <Route path={ path + "/subscriptions" }>
              <SubscriptionsComp />
          </Route>

          <Route path={ path + "/usersmanagement" }>
              <UsersManagementComp />
          </Route>
    </Switch>
  </div>
  );
}

export default MenuComp;