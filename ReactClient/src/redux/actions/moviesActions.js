import { ActionTypes } from "../constants/action-types";

export const setMovies = (movies) => {
  return {
    type: ActionTypes.SET_MOVIES,
    payload: movies,
  };
};

export const removeMovie = (movieid) => {
  return {
    type: ActionTypes.REMOVE_MOVIE,
    payload: movieid,
  };
};
export const updateMovie = (moviedata) => {
  return {
    type: ActionTypes.UPDATE_MOVIE,
    payload: moviedata,
  };
};