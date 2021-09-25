const express=require('express');
const app = express();
const cors = require('cors');
const authController = require('./controllers/auth');
const moviesController = require('./controllers/movies');
const signupController = require('./controllers/signup');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
require('./configs/database');
app.use('/api/auth',authController);
app.use('/api/movies',moviesController);
app.use('/api/signup',signupController);
app.listen(5000);
