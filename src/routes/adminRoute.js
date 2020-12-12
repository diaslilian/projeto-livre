const express = require("express");
const router = express.Router();

const controller = require("../controllers/adminController");

router.post("/", controller.createNewAdmin);
router.post("/login", controller.loginAdmin);

router.put("/:id", controller.updateAdmin);

router.delete("/:id", controller.removeAdmin);

module.exports = router;
