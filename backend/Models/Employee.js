const mongoose = require('mongoose');
const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  employeeid: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  contactno: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Employee', EmployeeSchema);
