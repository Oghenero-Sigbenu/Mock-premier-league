const express = require("express");
const fixtureController = require("../controllers/fixtures");
const isAdmin = require("../middleware/isAdmin");
const Role = require("../controllers/role");
const authenticate = require("../middleware/auth")

const router = express.Router();



router.post("/create", isAdmin, authenticate, fixtureController.createFixtures);
router.get("/get", authenticate, fixtureController.createFixtures);
router.put("/update", authenticate, isAdmin, fixtureController.createFixtures);
router.delete("/delete", authenticate, isAdmin, fixtureController.createFixtures);


module.exports = router;