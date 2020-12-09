const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    title: "Reprograma - On7 Backend 2020 - Final Project",
    version: "1.0.0",
    routes: ["/candidates/", "/companies/"],
  });
});

module.exports = router;
