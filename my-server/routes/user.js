const express = require("express");
const router = express.Router();
const { registerUser, createUser } = require("../controllers/userController");

router.post("/register", registerUser);
router.post("/", createUser);

module.exports = router;
