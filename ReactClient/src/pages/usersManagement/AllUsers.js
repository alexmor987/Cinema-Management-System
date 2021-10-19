import { useEffect,useState } from "react";
import utils from '../../utils/utils';

function AllUsersComp(props) {
    const [users, setUsers] = useState([]);
useEffect(async()=>{
try {
    let resp= await utils.getUsers();
    let allUsers=resp.data.users;
    setUsers(allUsers);
} catch (error) {
    console.log(error.message);
}
    },[])
  return (
    <div>
      <h3>All Users</h3>
      <ul>
      {
          users.map((x,i)=>{
              return<li key={i}>Full Name:{x.fullname}</li>
          })

      }
    </ul>
  </div>
  );
}

export default AllUsersComp;

