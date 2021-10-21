var express = require("express");
var router = express.Router();
const usersBL = require("../models/usersBL");
const auth = require("../middleware/auth");

router.get("/", auth, async function (req, res, next) {
  try {
    let allUsersData = await usersBL.getAllUsers();
    res.status(200).send({ users: allUsersData });
  } catch (error) {
    res.status(404).send({ error: error.message }); //Error
  }
});
router.get("/updateUser/:id", auth, async function (req, res, next) {
  try {
    let userData = await usersBL.getUserById(req.params.id);
    res.status(200).send({ user: userData });
  } catch (error) {
    res.status(404).send({ error: error.message }); //Error
  }
});
router.post("/updateUser", auth, async function (req, res, next) {
  try {
    await usersBL.updateUser(req.body);
    res.status(200);
  } catch (error) {
    res.status(404).send({ error: error.message }); //Error
  }
});

router.get("/deleteUser/:id", auth, async function (req, res, next) {
  try {
    await usersBL.deleteUser(req.params.id);
    res.status(200);
  } catch (error) {
    res.status(404).send({ error: error.message }); //Error
  }
});
router.post("/addUser", auth, async function (req, res, next) {
  try {
    await usersBL.createUser(req.body);
    res.status(200);
  } catch (error) {
    res.status(404).send({ error: error.message }); //Error
  }
});

module.exports = router;
