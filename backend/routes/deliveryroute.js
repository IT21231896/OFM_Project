const express = require('express');
const router = express.Router();
const Delivery = require('../Models/Delivery');

// POST - Create a new delivery
router.post('/create-delivery', (req, res) => {
  const newDelivery = new Delivery(req.body);
  newDelivery.save((err, delivery) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(delivery);
      res.status(200).json(delivery);
    }
  });
});

// GET - Get a list of all deliveries
router.get('/', (req, res) => {
  Delivery.find({}, (err, deliveries) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(deliveries);
      res.status(200).json(deliveries);
    }
  });
});

// GET - Get a single delivery by ID
router.get('/:id', (req, res) => {
  Delivery.findById(req.params.id, (err, delivery) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(delivery);
      res.status(200).json(delivery);
    }
  });
});

// PUT - Update a delivery by ID
router.put('/edit-delivery/:id', (req, res) => {
  Delivery.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, delivery) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(delivery);
        res.status(200).json(delivery);
      }
    }
  );
});

// DELETE - Delete a delivery by ID
router.delete('/:id', (req, res) => {
  Delivery.findByIdAndDelete(req.params.id, (err, delivery) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(delivery);
      res.status(200).json(delivery);
    }
  });
});

module.exports = router;