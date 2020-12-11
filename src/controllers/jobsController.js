const companies = require("../models/companies");
const jobs = require("../models/jobs");

const createJob = async (req, res) => {
  const companyId = req.params.id;

  const companyFound = await companies.findOne({ id: companyId });

  if (companyFound) {
    const job = new jobs.jobsModel(req.body);

    companyFound.jobs.push(job);
    companyFound.save((err) => {
      if (err) {
        res.status(424).send("Job not included.");
      }
      res.status(201).send(companyFound);
    });
  } else {
    return res.status(404).send("Company not found!");
  }
};

const getJobs = async (req, res) => {
  const companyId = req.params.id;

  return jobs.jobsModel.findById(companyId, (error, company) => {
    if (error) {
      return res.status(500).send(error);
    }

    if (company) {
      return res.status(200).send(company.job);
    }

    return res.status(404).send("Job not found.");
  });
};

module.exports = {
  createJob,
  getJobs,
};
