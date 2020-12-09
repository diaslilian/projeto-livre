const express = require("express");
const router = express.Router();

const controller = require("../controllers/companiesController");

router.post("/", controller.createCompany);

router.get("/", controller.getAllCompanies);
router.get("/:id", controller.getCompanyById);

router.put("/:id", controller.putCompany);

router.delete("/:id", controller.deleteCompany);

module.exports = router;
