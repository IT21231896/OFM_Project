const express = require("express");
const router = express.Router();
const Bill = require("../Models/Bill");

// POST - Create a new bill
router.post("/create-bill", (req, res) => {
  const newBill = new Bill(req.body);
  newBill.save((err, bill) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(bill);
      res.status(200).json(bill);
    }
  });
});

// GET - Get a list of all bills
router.get("/", (req, res) => {
  Bill.find({}, (err, bills) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(bills);
      res.status(200).json(bills);
    }
  });
});

// GET - Get a single bill by ID for EditBill.js
router.get("/:id", (req, res) => {
  Bill.findById(req.params.id, (err, bill) => {
    
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(bill);
      res.status(200).json(bill);
    }
  });
});

// PUT - Update a bill by ID
router.put("/edit-bill/:id", (req, res) => {
  Bill.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, bill) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(bill);
        res.status(200).json(bill);
      }
    }
  );
});

// DELETE - Delete a bill by ID
router.delete("/:id", (req, res) => {
  Bill.findByIdAndDelete(req.params.id, (err, bill) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(bill);
      res.status(200).json(bill);
    }
  });
});

module.exports = router;
