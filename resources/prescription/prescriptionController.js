/* eslint-disable consistent-return */
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
    const userId = req.decodedToken.id;
    // eslint-disable-next-line prefer-const
    let { drug, unit, completed, start_Date, end_Date } = req.body;

    start_Date = new Date(start_Date);

    end_Date = new Date(end_Date);

    const doc = new Prescription({
      userId,
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
      error: `${error.message}` || 'Something went wrong',
    });
  }
};

const deletePrescription = (req, res) =>{
  const { _id } = req.params;
  const { id } = req.decodedToken;
  try {
    Prescription.findOne({ _id }, (err, prescription) => {
      if (err) {
        return res.status(500).json({
          message: err,
        });
      }
      if (!prescription) {
        return res.status(500).json({
          message: 'prescription not found',
        });
      }
      if (prescription.userId !== id) {
        return res.status(403).json({
          message: 'Sorry, you can not delete this prescription',
        });
      }
      Prescription.deleteOne({ _id }, (error) => {
        if (error) {
          return res.status(500).json({
            message: error,
          });
        }
      });
      return res.status(200).json({
        message: 'prescription deleted successfully',
      });
    });
  } catch (error) {
    return res.status(500).json({
      error,
    });
  }
};

const verifyCompletion = async (req, res) => {
  const updateparamters = req.body;
  const { _id } = req.params;
  const { id } = req.decodedToken;
  try {
    const prescription = await Prescription.find({ _id });

    if (!prescription) {
      return res.status(404).json({
        message: 'Trip not found',
      });
    }

    if (prescription && (prescription[0].userId !== id)) {
      return res.status(409).json({
        message: "Sorry, you can't update this prescription",
      });
    }

    const updatedPrescription = await Prescription.update({ _id },
      { $set: updateparamters });
    if (updatedPrescription) {
      return res.status(200).json({
        message: 'Dose completed',
      });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message || 'Something went wrong',
    });
  }
};


module.exports = { addPrescription, deletePrescription, verifyCompletion };
