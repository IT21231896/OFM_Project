const express = require("express");
const router = express.Router();
const Finance = require("../Models/Finance");

// POST - Create a new finance entry
router.post("/create-finance", (req, res) => {
  const newFinance = new Finance(req.body);
  newFinance.save((err, finance) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(finance);
      res.status(200).json(finance);
    }
  });
});

// GET - Get a list of all finance entries
router.get("/", (req, res) => {
  Finance.find({}, (err, finances) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(finances);
      res.status(200).json(finances);
    }
  });
});

// GET - Get a single finance entry by ID
router.get("/:id", (req, res) => {
  Finance.findById(req.params.id, (err, finance) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(finance);
      res.status(200).json(finance);
    }
  });
});

// PUT - Update a finance entry by ID
router.put("/edit-finance/:id", (req, res) => {
  Finance.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, finance) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(finance);
        res.status(200).json(finance);
      }
    }
  );
});

// DELETE - Delete a finance entry by ID
router.delete("/:id", (req, res) => {
  Finance.findByIdAndDelete(req.params.id, (err, finance) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(finance);
      res.status(200).json(finance);
    }
  });
});

module.exports = router;
