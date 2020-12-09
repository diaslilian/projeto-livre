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

const putCompany = (req, res) => {
  const id = req.params.id;

  companies.find({ id }, (err, company) => {
    if (company.length > 0) {
      companies.updateMany({ id }, { $set: req.body }, (err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({ message: "Record successfully changed" })
      );
    } else {
      res.status(200).send({
        message: "No records to be updated with this id",
      });
    }
  });
};

const deleteCompany = (req, res) => {
  const id = req.params.id;

  companies.deleteMany({ id }, (err) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send({
          status: "Success",
          message: "Company successfully removed",
        });
  });
};

module.exports = {
  createCompany,
  getAllCompanies,
  putCompany,
  deleteCompany,
};
