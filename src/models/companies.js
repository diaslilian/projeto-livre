const mongoose = require("mongoose");
const jobs = require("./jobs");

const companiesSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    state: {
      type: String,
    },
    diversityInclusionCommittee: {
      type: Boolean,
    },
    jobs: [jobs.jobsSchema],
  },
  {
    versionKey: false,
  }
);

const companiesModel = mongoose.model("Companies", companiesSchema);

module.exports = { companiesModel, companiesSchema };
