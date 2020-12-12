const mongoose = require("mongoose");

const jobsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    remote: {
      type: Boolean,
    },
    requirements: [[String]],
  },
  {
    versionKey: false,
  }
);

const jobsModel = mongoose.model("jobs", jobsSchema);

module.exports = { jobsModel, jobsSchema };
