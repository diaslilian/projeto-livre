const companies = require("../models/companies");

const createCompany = (req, res) => {
  const company = new companies.companiesModel(req.body);

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
  companies.companiesModel.find((err, companie) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(companie);
  });
};

const getCompanyById = (req, res) => {
  const id = req.params.id;

  companies.companiesModel.find({ id }, (err, company) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(company);
  });
};

const putCompany = (req, res) => {
  const id = req.params.id;

  companies.companiesModel.find({ id }, (err, company) => {
    if (company.length > 0) {
      companies.companiesModel.updateMany({ id }, { $set: req.body }, (err) =>
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

  companies.companiesModel.deleteMany({ id }, (err) => {
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
  getCompanyById,
  putCompany,
  deleteCompany,
};
