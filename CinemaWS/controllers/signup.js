var express = require('express');
var router = express.Router();
const loginBL = require('../models/loginBL');
const usersBL = require('../models/usersBL');



/* GET login Page. */
router.get('/', function(req, res, next) {
  req.session.destroy();
  res.render('login',{msg:''});
});

/* Authenticated User from users collection */
router.post('/login',async function(req, res, next) {
  let isUserDataVerified= await loginBL.loginAuthentication(req.body.username,req.body.password);
  if ( typeof isUserDataVerified ==='object'){
      
      if(!isUserDataVerified.isAdmin){
        let userData=await usersBL.getUserById(isUserDataVerified._id);
        req.session.cookie.maxAge=(userData.sessionTimeOut*60000) ;//sessionTimeOut in min.
    }
      req.session["isAuthenticated"]=true;
      req.session["username"]=isUserDataVerified.UserName;
      req.session["isAdmin"]=isUserDataVerified.isAdmin;
      res.redirect('/menu');
      }
      else
      {
        res .render('login',{msg:'UserName  or password are wrong!'});
      }
});

/* POST from SignupPage  userLoginAuthenticationData. */
router.post('/',async function(req, res) {
  try {
  let userDataVerified= await loginBL.usernameAuthentication(req.body.username);
  if ( typeof userDataVerified ==='object')
  {
    let userDataFromClient=req.body;
    const status= await loginBL.passwordUpdate(userDataVerified._id,userDataFromClient);
    res.status(200).send(status); 
   
  }
else{
  res.status(200).send("UserName not found");
}
} catch(err){
  res.status(500).send({ errorName : err.name,errorMessage:err.message});
  
}  
});
module.exports = router

