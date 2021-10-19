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
const getMovieById=(id)=>
{
    return  axios.get('http://localhost:5000/api/movies/searchMovie/'+id);
}
const deleteMovieById=(id)=>
{
    return  axios.get('http://localhost:5000/api/movies/deleteMovie/'+id);
}
const updateMovie=(obj)=>
{
    return  axios.post('http://localhost:5000/api/movies/updateMovie/',obj);
}
export default {updateMovie,getMovies,getMembers,getUsers,getMemberById,getMovieById,deleteMovieById}