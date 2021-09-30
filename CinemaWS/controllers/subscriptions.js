var express =require('express');
var router = express.Router();
const subscriptionsBL= require('../models/subscriptionsBL');
const membersBL= require('../models/membersBL');
const auth = require("../middleware/auth");


router.get('/',auth,async function(req, res, next) {
  try {
    let allMembers=await membersBL.getAllMembersWithWatchingMovies();
    res.status(200).send({ members: allMembers});// "Success!"
  } catch (error) {
    res.status(404).send({ error: error.message});//Error 
  }    
});
router.get('/deleteMember/:id',auth, function(req, res, next) {
        membersBL.deleteMember(req.params.id).then(()=> {
        res.status(200); // "Success!"
      }).catch((e)=> {
        res.status(404).send({ error: e.message});//Error 
      });
});
router.get('/searchMember/:id',auth,async function(req, res, next) {
  try {
    let result=  await membersBL.searchMemberById(req.params.id);
     res.status(200).send({ member: result});
  } catch (error) {
    res.status(404).send({ error: error.message});
  }
});
router.post('/updateMember',auth, function(req, res, next) {
        membersBL.updateMember(req.body).then(()=> {
        res.status(200); // "Success!"
      }).catch((e)=> {
        res.status(404).send({ error: e.message});//error 
      });
});
router.post('/addSubscription',auth, function(req, res, next) {
        subscriptionsBL.subscribeOnNewMovie(req.body).then(()=> {
        res.status(200); // "Success!"
      }).catch((e)=> {
        res.status(404).send({ error: e.message});//error 
      });
});
router.get('/searchMemberById/:id',auth,async function(req, res, next) {
   try {
     let result=  await membersBL.searchMemberById(req.params.id);
     return res.json(result);
  } catch (error) {
    res.status(404).send({ error: error.message});
  }
});
router.get('/searchMoviesNameByMemberId/:id',auth,async function(req, res, next) {
     let result=  await subscriptionsBL.moviesNames(req.params.id);
     return res.json(result);
});

router.post('/addMember',auth,function(req, res, next) {
    membersBL.createMember(req.body);
    res.redirect('/subscriptions').then(()=> {
      res.status(200); // "Success!"
    }).catch((e)=> {
      res.status(404).send({ error: e.message});//error 
    });
});

module.exports = router;