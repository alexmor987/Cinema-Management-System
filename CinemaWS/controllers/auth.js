const express = require('express');
const jwt = require('jsonwebtoken');
const loginBL = require('../models/loginBL');
const usersBL = require('../models/usersBL');
var router = express.Router();

router.post('/login',async function(req, res) {
try {
    let isUserDataVerified= await loginBL.loginAuthentication(req.body.username,req.body.password);
    const username = req.body.username;

    if (isUserDataVerified) 
    {
        const userId = await loginBL.findUserIdForUserName(username);
       
       
       //Get the real secret key from db or envinroment variable..
        const RSA_PRIVATE_KEY = 'somekey';

        var tokenData = jwt.sign({ id: userId },
                             RSA_PRIVATE_KEY,
                            {expiresIn: 7200  } // expires in 2 hours
                            );
        res.status(200).send({ token: tokenData });
    }
    else
    {
        res.sendStatus(401); 
    }
} catch (error) {
    res.status(500).send({ errorName : error.name,errorMessage:error.message});
}
    
    
  });

  module.exports = router;