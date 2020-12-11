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

const getJobById = async (req, res) => {
  const companyId = req.params.companyId;
  const jobId = req.params.jobId;

  const company = await companies.companiesModel.findById(companyId);
  const job = company.jobs.find((job) => job._id == jobId);

  return res.status(200).send(job);
};

const putJob = async (req, res) => {
  const companyId = req.params.companyId;
  const jobId = req.params.jobId;
  const options = { new: true };

  await companies.companiesModel.findOneAndUpdate(
    { _id: companyId, "jobs._id": jobId },
    {
      $set: {
        "jobs.$.title": req.body.title,
        "jobs.$.description": req.body.description,
        "jobs.$.remote": req.body.remote,
        "jobs.$.requirements": req.body.requirements,
      },
    },
    options,
    (err, company) => {
      if (err) {
        return res.status(500).send(err);
      }

      if (company) {
        return res.status(200).send(company);
      }

      return res.status(404).send("Company not found!");
    }
  );
};

module.exports = {
  createJob,
  getJobById,
  putJob,
};
