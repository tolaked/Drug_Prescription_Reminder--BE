/* eslint-disable camelcase */
const Prescription = require('./prescription.model');
const validation = require('./prescriptions.validation');

const addPrescription = async (req, res) => {
  try {
    const { error } = validation.validatePrescription(req.body);
    if (error) {
      return res.status(422).json({
        message: error.details[0].message,
      });
    }
    const { drug, start_Date, end_Date, unit, completed } = req.body;

    const doc = new Prescription({
      drug,
      start_Date,
      end_Date,
      completed,
      unit,
    });
    await doc.save();

    return res.status(201).json({
      message: 'Prescription added successfuly',
      prescription: doc,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: `see ${error.message}` || 'Something went wrong',
    });
  }
};

module.exports = { addPrescription };
