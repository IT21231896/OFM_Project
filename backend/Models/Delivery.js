const mongoose = require('mongoose');

const { Schema } = mongoose;

const deliverySchema = new Schema({
  orderid: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  addressLine1: {
    type: String,
    required: true,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  region: {
    type: String,
  },
  postalCode: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Delivery', deliverySchema);
