const mongoose = require('mongoose');

const { Schema } = mongoose;
const PrescriptionSchema = Schema({
  drug: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  unit: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50,
  },
  start_Date: {
    type: Date,
  },
  end_Date: {
    type: Date,
  },
  userId: {
    type: String,
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const PrescriptionModel = mongoose.model('Prescription', PrescriptionSchema);
module.exports = PrescriptionModel;
