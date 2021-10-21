import axios from "axios";
import authSrv from "../services/auth";

axios.interceptors.request.use((req) => {
  req.headers = { "x-access-token": authSrv.getToken() };
  return req;
});
/////////////////////Movies utils functions///////////////////////////////
const getMovies = () => {
  return axios.get("http://localhost:5000/api/movies");
};
const getMovieById = (id) => {
  return axios.get("http://localhost:5000/api/movies/searchMovie/" + id);
};
const deleteMovieById = (id) => {
  return axios.get("http://localhost:5000/api/movies/deleteMovie/" + id);
};
const updateMovie = (obj) => {
  return axios.post("http://localhost:5000/api/movies/updateMovie/", obj);
};
const addMovie = (obj) => {
  return axios.post("http://localhost:5000/api/movies/addMovie/", obj);
};

/////////////////////Subscriptions utils functions///////////////////////////////
const addMember = (obj) => {
  return axios.post("http://localhost:5000/api/subscriptions/addMember/", obj);
};
const getMembers = () => {
  return axios.get("http://localhost:5000/api/subscriptions");
};
const getMemberById = (id) => {
  return axios.get(
    "http://localhost:5000/api/subscriptions/searchMember/" + id
  );
};
/////////////////////Users utils functions///////////////////////////////
const addUser = (obj) => {
  return axios.post("http://localhost:5000/api/users/addUser/", obj);
};
const getUsers = () => {
  return axios.get("http://localhost:5000/api/users");
};
export default {
  addUser,
  addMember,
  addMovie,
  updateMovie,
  getMovies,
  getMembers,
  getUsers,
  getMemberById,
  getMovieById,
  deleteMovieById,
};
