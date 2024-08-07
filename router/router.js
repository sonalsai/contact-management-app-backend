const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../models/contact");

const router = express.Router();
// router.use(express.json())

mongoose.connect("mongodb://localhost:27017/contactDatas");

router.get("/", (req, res) => {
  UserModel.find({})
    .then((contacts) => {
      res.json(contacts);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/create", (req, res) => {
  UserModel.create(req.body)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.put("/update/:id", (req, res) => {
  const id = req.params.id;
  UserModel.replaceOne(
    { _id: id },
    {
      contactName: req.body.contactName,
      contactNumber: req.body.contactNumber,
      contactEmail: req.body.contactEmail,
      dateCreated: req.body.dateCreated,
    }
  )
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete("/delete/:id", (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({ _id: id })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});
module.exports = router;
