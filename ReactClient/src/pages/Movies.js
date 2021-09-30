import { useState } from "react";
import authSrv from '../services/auth';
import NavTabs from "../components/NavTabs";
import AllMoviesComp from "../pages/AllMovies";
import AddMovieComp from "../pages/AddMovie";
import MovieComp from "../pages/Movie";
import {Switch, Route,useRouteMatch} from 'react-router-dom';
import SubscriptionsComp from "./Subscriptions";


function MoviesComp(props) {
  
  let { path, url} = useRouteMatch();
  const [tabsUrl] = useState({firstTabUrl:"/allmovies",secondTabUrl:"/addmovie"});
  const [tabsName] = useState({firstTabName:"All Movies",secondTabName:"Add Movie"});

  return (
    <div>
       <NavTabs url={url} tabsUrl={tabsUrl} tabsName={tabsName}/>
    <Switch>
          
           <Route exact path={ path + "/" }>
              <AllMoviesComp />
          </Route>
           <Route path="menu/subscriptions/:id">
              <SubscriptionsComp />
          </Route>
          <Route  path={ path + tabsUrl.firstTabUrl }>
              <AllMoviesComp />
          </Route>
           
          <Route path={ path + tabsUrl.secondTabUrl }>
              <AddMovieComp />
          </Route>
          <Route  path={ path + "/:id" }>
           <MovieComp />
       </Route>
    </Switch>

  </div>
  );
}

export default MoviesComp;