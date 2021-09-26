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

export default {getMovies}