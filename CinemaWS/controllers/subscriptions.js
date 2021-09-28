var express = require('express');
var router = express.Router();
const subscriptionsBL= require('../models/subscriptionsBL');
const membersBL= require('../models/membersBL');
const auth = require("../middleware/auth");


router.get('/',auth,async function(req, res, next) {
       let allMembers=await membersBL.getAllMembersWithWatchingMovies();
       res.status(200).send({ members: allMembers});
});


router.get('/deleteMember/:id',async function(req, res, next) {
  if(req.session.isAuthenticated)
  {
       await membersBL.deleteMember(req.params.id);
     
      res.redirect('/subscriptions');
   }
  else
  {
      res.redirect("/login");
  }
});
router.get('/searchMember/:id',auth,async function(req, res, next) {
     let result=  await membersBL.searchMemberById(req.params.id);
     res.status(200).send({ member: result});

});
router.post('/updateMember',async function(req, res, next) {
  if(req.session.isAuthenticated)
  {
       await membersBL.updateMember(req.body);
       res.redirect('/subscriptions');
   }
  else
  {
      res.redirect("/login");
  }
});
router.post('/addSubscription',async function(req, res, next) {
  if(req.session.isAuthenticated)
  {
       await subscriptionsBL.subscribeOnNewMovie(req.body);
       res.redirect('/subscriptions');
   }
  else
  {
      res.redirect("/login");
  }
});
router.get('/searchMemberById/:id',async function(req, res, next) {
  if(req.session.isAuthenticated)
  {
     let result=  await membersBL.searchMemberById(req.params.id);
     return res.json(result.pop());
   }
  else
  {
      res.redirect("/login");
  }
});
router.get('/searchMoviesNameByMemberId/:id',async function(req, res, next) {
  if(req.session.isAuthenticated)
  {
     let result=  await subscriptionsBL.moviesNames(req.params.id);
     return res.json(result);
   }
  else
  {
      res.redirect("/login");
  }
});

router.post('/addMember',async function(req, res, next) {
    await membersBL.createMember(req.body);
    res.redirect('/subscriptions');
});
router.get('/addMember',async function(req, res, next) {
    if(req.session.isAuthenticated)
    {
    res.render('addMember',{isAdmin:req.session.isAdmin,username:req.session.username}); 
    }
    else{
    res.redirect('/login')
    }
});

module.exports = router;