const companies = require("../models/companies");

const createCompany = (req, res) => {
  const company = new companies(req.body);

  company.save((err) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(201).send({
          status: true,
          message: "Successfully included company!",
        });
  });
};

const getAllCompanies = (req, res) => {
  console.log(req.url);

  companies.find((err, companie) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(companie);
  });
};

module.exports = {
  createCompany,
  getAllCompanies,
};
