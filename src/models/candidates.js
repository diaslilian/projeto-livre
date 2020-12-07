const mongoose = require("mongoose");

const candidatesSchema = new mongoose.Schema(
  {
    id: { type: Number },
    fullName: { type: String, required: true },
    birthDate: { type: String },
    email: { type: String, required: true },
    phone: { type: Number },
    city: { type: String },
    state: { type: String },
    educationalLevel: { type: String },
    language: { type: Boolean },
    whatLanguages: [[String]],
    jobs: { type: String },
  },
  {
    versionKey: false,
  }
);

const candidatesModel = mongoose.model("Candidates", candidatesSchema);

module.exports = candidatesModel;
