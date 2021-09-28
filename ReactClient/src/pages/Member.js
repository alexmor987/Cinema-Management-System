import { useEffect,useState } from "react";
import { useParams} from 'react-router-dom'
import utils from '../utils/utils';

function MemberComp() {
    const [member, setMember] = useState('');
    let { id } = useParams()
useEffect(async()=>{
try {
    
    let resp= await utils.getMemberById(id);
    let memberData=resp.data.member;
    setMember(memberData);
} catch (error) {
    console.log(error.message);
}
    },[id])

  return (
    <div>
    Id:{id}<br/>
    
    
  </div>
  );
}

export default MemberComp;

