const express = require("express");
const router = express.Router();

const controller = require("../controllers/companiesController");

router.post("/", controller.createCompany);

router.get("/", controller.getAllCompanies);

router.put("/:id", controller.putCompany);

module.exports = router;
