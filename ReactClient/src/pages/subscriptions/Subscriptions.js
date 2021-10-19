import { useEffect ,useState} from "react";

import MemberComp from "../subscriptions/Member";
import AllMembersComp from "../subscriptions/AllMembers";
import AddMemberComp from "../subscriptions/AddMember";
import {Switch, Route,useRouteMatch} from 'react-router-dom';
import NavTabs from "../../components/NavTabs";
import MoviesComp from "../../components/Movies";

function SubscriptionsComp(props) {
  let { path, url} = useRouteMatch();
  const [tabsUrl] = useState({firstTabUrl:"/allmembers",secondTabUrl:"/addmemeber"});
  const [tabsName] = useState({firstTabName:"All Members",secondTabName:"Add Member"});

  return (
    <div>
    <NavTabs url={url} tabsUrl={tabsUrl} tabsName={tabsName}/>
 <Switch>
       
        <Route exact path={ path + "/" }>
           <AllMembersComp />
       </Route>
    
       <Route  path={ path + tabsUrl.firstTabUrl }>
           <AllMembersComp />
       </Route>
        
       <Route path={ path + tabsUrl.secondTabUrl }>
           <AddMemberComp />
       </Route>
       <Route path="menu/movies/:id">
              <MoviesComp />
          </Route>
       <Route  path={ path + "/:id" }>
           <MemberComp />
       </Route>
 </Switch>
 </div>
  );
}

export default SubscriptionsComp;