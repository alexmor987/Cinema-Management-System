import { useEffect } from "react";
import authSrv from '../services/auth';

function UsersManagementComp(props) {
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <h3>Users Management</h3>
  </div>
  );
}

export default UsersManagementComp;