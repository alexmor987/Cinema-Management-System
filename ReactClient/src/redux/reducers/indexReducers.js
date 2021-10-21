import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  moviesReducer ,
  usersReducer
})