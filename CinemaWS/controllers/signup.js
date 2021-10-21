var express = require("express");
var router = express.Router();
const loginBL = require("../models/loginBL");
const usersBL = require("../models/usersBL");

/* POST from SignupPage  userLoginAuthenticationData. */
router.post("/", async function (req, res) {
  try {
    let userDataVerified = await loginBL.usernameAuthentication(
      req.body.username
    );
    if (typeof userDataVerified === "object") {
      let userDataFromClient = req.body;
      const status = await loginBL.passwordUpdate(
        userDataVerified._id,
        userDataFromClient
      );
      res.status(200).send(status);
    } else {
      res.status(200).send("UserName not found");
    }
  } catch (err) {
    res.status(500).send({ errorName: err.name, errorMessage: err.message });
  }
});
module.exports = router;
