import { useEffect,useState } from "react";
import utils from '../utils/utils';

function AllMoviesComp(props) {
    const [movies, setMovies] = useState([]);
useEffect(async()=>{
try {
    let resp= await utils.getMovies();
    let allmovies=resp.data.movies;
    setMovies(allmovies);
} catch (error) {
    console.log(error.message);
}
    },[])
  return (
    <div>
      <h3>All Movies</h3>
      <ul>
      {
          movies.map((x,i)=>{
              return<li key={i}>name:{x.moviename}</li>
          })

      }
    </ul>
  </div>
  );
}

export default AllMoviesComp;

