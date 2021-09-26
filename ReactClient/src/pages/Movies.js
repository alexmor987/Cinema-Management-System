import { useEffect } from "react";
import authSrv from '../services/auth';
import NavTabs from "../components/NavTabs";
import AllMoviesComp from "../pages/AllMovies";
import AddMovieComp from "../pages/AddMovie";
import {Switch, Route, Link,useRouteMatch} from 'react-router-dom';


function MoviesComp(props) {
  
  let { path, url} = useRouteMatch();

  return (
    <div>
       <NavTabs url={url} />
    <Switch>
          
           <Route exact path={ path + "/" }>
              <AllMoviesComp />
          </Route>

          <Route  path={ path + "/allmovies" }>
              <AllMoviesComp />
          </Route>
           
          <Route path={ path + "/addmovie" }>
              <AddMovieComp />
          </Route>
    </Switch>

  </div>
  );
}

export default MoviesComp;