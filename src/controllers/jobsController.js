const companies = require("../models/companies");
const jobs = require("../models/jobs");

const createJob = async (req, res) => {
  const companyId = req.params.companyId;
  const job = req.body;

  const newJob = new jobs.jobsModel(job);
  const company = await companies.companiesModel.findById(companyId);

  company.jobs.push(newJob);
  company.save((err) => {
    if (err) {
      return res.status(500).send(err);
    }

    return res.status(201).send(company);
  });
};

const getAllJobs = async (req, res) => {
  const companyId = req.params.id;

  await companies.companiesModel.findById(companyId, (err, company) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (company) {
      return res.status(200).send(company.jobs);
    }

    return res.status(404).send("Company not found.");
  });
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

const deleteJob = (req, res) => {
  const jobId = req.params.jobId;
  const companyId = req.params.companyId;

  jobs.jobsModel.deleteMany({ _id: companyId }, (err) => {
    if (err) return res.status(424).send("Job was not removed.");

    companies.companiesModel.updateMany(
      {},
      { $pull: { jobs: { _id: jobId } } },
      (err) => {
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({ message: "Job successfully removed" });
      }
    );
  });
};

module.exports = {
  createJob,
  getAllJobs,
  getJobById,
  putJob,
  deleteJob,
};
