import { useEffect ,useState} from "react";
import authSrv from '../../services/auth';
import AllUsersComp from "../usersManagement/AllUsers";
import AddUserComp from "../usersManagement/AddUser";
import {Switch, Route,useRouteMatch} from 'react-router-dom';
import NavTabs from "../../components/NavTabs";
  
  function UsersManagementComp(props) {
    let { path, url} = useRouteMatch();
    const [tabsUrl] = useState({firstTabUrl:"/allusers",secondTabUrl:"/adduser"});
    const [tabsName] = useState({firstTabName:"All Users",secondTabName:"Add User"});
 
    return (
      <div>
      <NavTabs url={url} tabsUrl={tabsUrl} tabsName={tabsName}/>
   <Switch>
         
          <Route exact path={ path + "/" }>
             <AllUsersComp />
         </Route>
  
         <Route  path={ path + tabsUrl.firstTabUrl }>
             <AllUsersComp />
         </Route>
          
         <Route path={ path + tabsUrl.secondTabUrl }>
             <AddUserComp />
         </Route>
   </Switch>
   </div>
    );
  }
  
  export default UsersManagementComp;