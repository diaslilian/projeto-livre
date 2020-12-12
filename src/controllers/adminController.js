const adminModel = require("../models/admin");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const createNewAdmin = (req, res) => {
  const hashingPassword = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hashingPassword;

  const admin = new adminModel(req.body);

  admin.save((err) => {
    if (err) {
      return res.status(500).send({ message: err.message });
    }

    return res.status(201).send(admin);
  });
};

const loginAdmin = (req, res) => {
  adminModel.findOne({ email: req.body.email }, (err, admin) => {
    if (!admin) {
      return res.status(404).send(`
        There is no Admin with this email ${req.body.email}`);
    }

    const validPassword = bcrypt.compareSync(req.body.password, admin.password);

    if (!validPassword) {
      return res.status(403).send({ message: "Invalid password" });
    }

    const token = jwt.sign({ email: req.body.email }, SECRET);

    return res.status(200).send(token);
  });
};

const updateAdmin = (req, res) => {
  const id = req.params.id;
  const body = req.body;

  adminModel.findByIdAndUpdate(id, body, (err, admin) => {
    if (err) {
      return res.status(424).send({ message: err.message });
    } else if (admin) {
      return res.status(200).send("Admin has been updated successfully!");
    }
    res.status(404).send("There are no records to update with this ID!");
  });
};

const removeAdmin = (req, res) => {
  const id = req.params.id;

  adminModel.findByIdAndDelete(id, (err, admin) => {
    if (err) {
      return res.status(500).send(err);
    }

    if (admin) {
      return res.status(200).send("Admin deleted successfully!");
    }

    return res.status(404).send("Admin not found.");
  });
};

module.exports = {
  createNewAdmin,
  loginAdmin,
  updateAdmin,
  removeAdmin,
};
