import axios from 'axios';
import authSrv from '../services/auth';

axios.interceptors.request.use(req=>
    {
        req.headers={"x-access-token":authSrv.getToken()};
        return req;
    })

const getMovies=()=>
{
    return  axios.get('http://localhost:5000/api/movies');
}
const getMembers=()=>
{
    return  axios.get('http://localhost:5000/api/subscriptions');
}
const getUsers=()=>
{
    return  axios.get('http://localhost:5000/api/users');
}
const getMemberById=(id)=>
{
    return  axios.get('http://localhost:5000/api/subscriptions/searchMember/'+id);
}

export default {getMovies,getMembers,getUsers,getMemberById}