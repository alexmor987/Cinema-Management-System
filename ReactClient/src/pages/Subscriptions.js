import { useEffect } from "react";
import authSrv from '../services/auth';

function SubscriptionsComp(props) {
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <h3>Subscriptions</h3>
  </div>
  );
}

export default SubscriptionsComp;