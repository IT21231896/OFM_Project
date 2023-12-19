const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema({
  
  itemName: {
    type: String,
    required: true
  },
  itemQty: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  customerId: {
    type: String,
    required: true
  },
  orderid:{
    type: String,
    required: true
  }
});

module.exports = mongoose.model('order', OrderSchema);
