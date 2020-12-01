const express = require("express");
const router = express.Router();

const controller = require("../controllers/candidatesController");

router.post("/", controller.createCandidate);

router.get("/", controller.getAllCandidates);
router.get("/:id", controller.getById);

module.exports = router;
