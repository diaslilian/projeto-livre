const candidates = require("../models/candidates");

const createCandidate = (req, res) => {
  candidates.countDocuments((err, count) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else {
      const candidate = new candidates(req.body);

      candidate.id = count + 1;
      candidate.save((err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(201).send({
              status: true,
              message: "Successfully included candidates!",
            })
      );
    }
  });
};

const getAllCandidates = (req, res) => {
  candidates.find((err, candidate) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(candidate);
  });
};

const getCandidateByLanguage = (req, res) => {
  candidates.find({ language: true }, (err, lan) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(lan);
  });
};

const getById = (req, res) => {
  const id = req.params.id;

  candidates.find({ id }, (err, candidate) => {
    err
      ? res.status(424).send({ message: err.message })
      : res.status(200).send(candidate);
  });
};

const putCandidate = (req, res) => {
  const id = req.params.id;

  candidates.find({ id }, (err, candidate) => {
    if (candidate.length > 0) {
      candidates.updateMany({ id }, { $set: req.body }, (err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({ message: "Record successfully changed" })
      );
    } else {
      return res.status(200).send({
        message: "No records to be updated with this id",
      });
    }
  });
};

const deleteCandidate = (req, res) => {
  const id = req.params.id;

  candidates.find({ id }, (err, candidate) => {
    if (candidate.length > 0) {
      candidates.deleteOne({ id }, (err) =>
        err
          ? res.status(424).send({ message: err.message })
          : res.status(200).send({
              status: "Success",
              message: "Candidate successfully removed",
            })
      );
    } else {
      return res.status(200).send({
        message: "No candidate to be removed",
        status: "Empty",
      });
    }
  });
};

module.exports = {
  createCandidate,
  getAllCandidates,
  getCandidateByLanguage,
  getById,
  putCandidate,
  deleteCandidate,
};
