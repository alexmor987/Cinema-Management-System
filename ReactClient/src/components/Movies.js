import * as React from 'react';
import { Link } from "react-router-dom";

export default function MoviesComp(props) {
  return (
    <div>
        <ul>
        {
            props.movies.map((item,index)=>{
             
                return <li key={index}>< Link to={"/menu/movies/"+item.movieId} >
                {item.name}
              </Link>,{item.date.substring(0,10)}</li>
              
            })
        }
        </ul>
    </div>
  );
}

