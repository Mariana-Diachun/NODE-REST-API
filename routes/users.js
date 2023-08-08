const User = require("../models/User");
const router = require("express").Router();


// update user
// delete user
// get a user
// follow a user
// unfollow a user

router.get("/", (req, res) => {
  res.send("hey its user route");
});

module.exports = router;
