const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companiesController");
const jobController = require("../controllers/jobsController");

router.post("/", companyController.createCompany);
router.post("/:companyId/jobs", jobController.createJob);

router.get("/", companyController.getAllCompanies);
router.get("/:id", companyController.getCompanyById);
router.get("/:id/jobs", jobController.getAllJobs);
router.get("/:companyId/jobs/:jobId", jobController.getJobById);

router.put("/:id", companyController.putCompany);
router.put("/:companyId/jobs/:jobId", jobController.putJob);

router.delete("/:id", companyController.deleteCompany);
router.delete("/:companyId/jobs/:jobId", jobController.deleteJob);

module.exports = router;
