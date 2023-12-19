const mongoose = require('mongoose');
const { Schema } = mongoose;

let financeSchema = new Schema({
  employeeId: {
    type: String,
    required: true
  },
  employeeName: {
    type: String,
    required: true
  },
  dateOfWorked: {
    type: Date,
    required: true
  },
  salaryAmount: {
    type: Number,
    required: true
  }
}, {
  collation: {
    locale: 'en_US',
    strength: 1
  }
});

module.exports = mongoose.model('Finance', financeSchema);
