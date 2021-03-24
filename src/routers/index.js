const express = require("express");

const taskController = require("../controllers/taskController");

const router = express.Router();

router.get("/", taskController.findAll);

module.exports = router;