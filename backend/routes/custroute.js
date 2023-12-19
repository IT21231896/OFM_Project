const express = require("express");
const router = express.Router();
const Customer = require("../Models/Customer");

// POST - Create a new customer
router.post("/create-customer", (req, res) => {
  const newCustomer = new Customer(req.body);
  newCustomer.save((err, customer) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(customer);
      res.status(200).json(customer);
    }
  });
});

// GET - Get a list of all customers
router.get("/", (req, res) => {
  Customer.find({}, (err, customers) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(customers);
      res.status(200).json(customers);
    }
  });
});

// GET - Get a single customer by ID for Editcusotmer.js
router.get("/:id", (req, res) => {
  Customer.findById(req.params.id, (err, customer) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(customer);
      res.status(200).json(customer);
    }
  });
});

// PUT - Update a customer by ID
router.put("/edit-customer/:id", (req, res) => {
  Customer.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, customer) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(customer);
        res.status(200).json(customer);
      }
    }
  );
});

// DELETE - Delete a customer by ID
router.delete("/:id", (req, res) => {
  Customer.findByIdAndDelete(req.params.id, (err, customer) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(customer);
      res.status(200).json(customer);
    }
  });
});

// Login
router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  try {
    const customer = await Customer.findOne({ username });
    if (!customer || customer.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }
    // Set session data or JWT token
    req.session.customerId = customer._id;
    res.status(200).json({ token: "JWT_token_here" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});



module.exports = router;
