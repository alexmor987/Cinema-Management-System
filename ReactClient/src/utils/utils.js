import axios from 'axios';
import authSrv from '../services/auth';

const getMovies=()=>
{
    let token=authSrv.getToken();
    return  axios.get('http://localhost:5000/api/movies',
            {
                headers:{"x-access-token":token}
            });
}

export default {getMovies}