import { useEffect } from "react";
import authSrv from '../services/auth';

function AddMovieComp(props) {
useEffect(()=>{
    let token=authSrv.getToken();
    if(token===undefined){
    props.history.push("/");
}
    },[])
  return (
    <div>
      <h3>Add Movie</h3>
  </div>
  );
}

export default AddMovieComp;