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
  console.log(req.url);

  candidates.find((err, candidate) => {
    return res.status(200).send(candidate);
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

module.exports = {
  createCandidate,
  getAllCandidates,
  getById,
};
