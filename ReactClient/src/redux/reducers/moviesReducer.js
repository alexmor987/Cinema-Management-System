/*
action - a JSON with :
    - type (mandatory) - the type of the action
    - payload (optional) - the data send with the action
*/
import { ActionTypes } from "../constants/action-types";
const intialState = {
  movies: [],
  genres: [],
};

 const moviesReducer = (state = intialState,{ type, payload }) =>
{
    switch(type)
    {
        case ActionTypes.SET_MOVIES :
            return {...state,movies:payload.movies,genres:payload.genres}

        case ActionTypes.REMOVE_MOVIE:
            let arr = state.movies;
            let arrAfterRemove= arr.filter(x => {
               return(x.movieid !==payload);
            }
               );
         
            return { ...state,  movies :  arrAfterRemove }

        case ActionTypes.UPDATE_MOVIE:
            let arrMoviesData = state.movies;
            let index= arrMoviesData.findIndex(x =>x.movieid ===payload.movieid);
               
            if(index >= 0)
               {
                arrMoviesData[index] = payload;
               }
            return { ...state,  movies :  arrMoviesData }

        default:
            return state;
}
    };
    
    export default moviesReducer;


