const express = require("express");
const userController = require("../controllers/user");

const router = express.Router();


router.post("/register/:admin?", userController.signUp);
router.get("/all", userController.getAllUser);


module.exports = router;