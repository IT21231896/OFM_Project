const express = require("express");
const router = express.Router();
const Supplier = require("../Models/Supplier");

// POST - Create a new supplier
router.post("/create-supplier", (req, res) => {
  const newSupplier = new Supplier(req.body);
  newSupplier.save((err, supplier) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(supplier);
      res.status(200).json(supplier);
    }
  });
});

// GET - Get a list of all suppliers
router.get("/", (req, res) => {
  Supplier.find({}, (err, suppliers) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(suppliers);
      res.status(200).json(suppliers);
    }
  });
});

// GET - Get a single supplier by ID
router.get("/:id", (req, res) => {
  Supplier.findById(req.params.id, (err, supplier) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(supplier);
      res.status(200).json(supplier);
    }
  });
});

// PUT - Update a supplier by ID
router.put("/edit-supplier/:id", (req, res) => {
  Supplier.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, supplier) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(supplier);
        res.status(200).json(supplier);
      }
    }
  );
});

// DELETE - Delete a supplier by ID
router.delete("/:id", (req, res) => {
  Supplier.findByIdAndDelete(req.params.id, (err, supplier) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(supplier);
      res.status(200).json(supplier);
    }
  });
});

module.exports = router;
