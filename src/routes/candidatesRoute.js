const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");

const candidateController = require("../controllers/candidatesController");

router.use(authMiddleware);

router.post("/", candidateController.createCandidate);

router.get("/", candidateController.getAllCandidates);
router.get("/language", candidateController.getCandidateByLanguage);
router.get("/:id", candidateController.getById);

router.put("/:id", candidateController.putCandidate);

router.delete("/:id", candidateController.deleteCandidate);

module.exports = router;
