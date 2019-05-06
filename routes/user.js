const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();


router.post("/register/:admin?", userController.signUp);//for admin registration
router.post("/register/", userController.signUp);//for user registration
router.get("/all", userController.getAllUser);


module.exports = router;