const express = require("express");
const {
  createUser,
  loginWithOTP,
  verifyOTP,
  LoadUser,
} = require("../controller/USerController");
const router = express.Router();

router.route("/user/add").post(createUser);
router.route("/user/login").post(loginWithOTP);
router.route("/user/verify").post(verifyOTP);
router.route("/user/me").post(LoadUser);

module.exports = router;
