const mongoose = require('mongoose');
const { Schema } = mongoose;

const BillSchema = new Schema({
  billno: {
    type: Number,
    required: true
  },
  item: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  totalprice: {
    type: Number,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Bill', BillSchema);
