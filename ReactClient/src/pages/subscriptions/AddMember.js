import { useEffect } from "react";
import authSrv from '../../services/auth';

function AddMemberComp(props) {
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <h3>Add Member</h3>
  </div>
  );
}

export default AddMemberComp;