const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company:{ type: String, required: true },
  supplierid: { type: String, required: true },
  mobileno: { type: Number, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
