var express = require('express');
var router = express.Router();
const moviesBL= require('../models/moviesBL');
const auth = require("../middleware/auth");

/* Get- All Movies. */
router.get('/',auth,async function(req, res, next) {
  try {
     let allMovies=await  moviesBL.getAllMovies();
     let allGenres=await  moviesBL.getGenersList();
     res.status(200).send({ movies: allMovies,genres:allGenres});
    } catch (error) {
      res.status(404).send({ error: error.message});
    }
});
/* POST- ADD Movie. */
router.post('/addMovie',auth,async function(req, res, next) {
  try {
     await  moviesBL.addMovie(req.body);
     res.status(200);
    } catch (error) {
      res.status(404).send({ error: error.message});
    }    
});
/* Get- Search Movie by id.*/
router.get('/searchMovie/:id',auth,async function(req, res, next) {
  try {
      let result=await moviesBL.searchMovieById(req.params.id);
      res.status(200).send({ movie: result});
       } catch (error) {
      res.status(404).send({ error: error.message});
       }    
});
router.get('/deleteMovie/:id',auth, function(req, res, next) {
       moviesBL.deleteMovie(req.params.id).then(function(value) {
        res.status(200); // "Success!" 
      }).catch(function(e) {
        console.error(e); // "error"
        res.status(404);
      })
});
/* POST- Update Movie. */
router.post('/updateMovie',auth,async function(req, res, next) {
  try {
      await moviesBL.updateMovie(req.body);
       res.status(200);
       } catch (error) {
      res.status(404).send({ error: error.message});
       }  
});
module.exports = router;
