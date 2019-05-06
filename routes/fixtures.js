const express = require("express");
const fixtureController = require("../controllers/fixtures");
// const authenticate = require("../middleware/adminAuth");
const isAdmin = require("../middleware/isAdmin");
const router = express.Router();
const Role = require("../controllers/role");
const authenticate = require("../middleware/auth")


router.post("/create",isAdmin, authenticate, fixtureController.createFixtures);
router.put("/update", authenticate, isAdmin, fixtureController.createFixtures);
router.delete("/delete", authenticate, isAdmin, fixtureController.createFixtures);


module.exports = router;