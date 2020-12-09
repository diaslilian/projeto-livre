const mongoose = require("mongoose");

const companiesSchema = new mongoose.Schema(
  {
    id: { type: Number },
    name: { type: String },
    phone: { type: Number },
    email: { type: String },
    jobOpportunity: { type: String },
    companyName: { type: String },
    city: { type: String },
    state: { type: String },
    diversityInclusionCommittee: { type: Boolean },
  },
  {
    versionKey: false,
  }
);

const companiesModel = mongoose.model("Companies", companiesSchema);

module.exports = companiesModel;
