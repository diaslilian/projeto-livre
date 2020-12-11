const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companiesController");
const jobController = require("../controllers/jobsController");

router.post("/", companyController.createCompany);

router.post("/:id/jobs", jobController.createJob);

router.get("/", companyController.getAllCompanies);
router.get("/:id", companyController.getCompanyById);

router.put("/:id", companyController.putCompany);

router.delete("/:id", companyController.deleteCompany);

module.exports = router;
