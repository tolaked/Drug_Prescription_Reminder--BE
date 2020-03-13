const express = require("express");

const router = express.Router();

const userController = require("./userController");

const { register, login } = userController;

router.route("/");
router.route("/register").post(register);
router.route("/login").post(login);

module.exports = router;
