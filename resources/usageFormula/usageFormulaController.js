const UsageFormula = require('./usageFormula.model');
const Prescription = require('../prescription/prescription.model');
const validation = require('./usageFormula.validation');

const addFormula = async (req, res) => {
  try {
    const { error } = validation.validateUsageFormula(req.body);
    if (error) {
      return res.status(422).json({
        message: error.details[0].message,
      });
    }
    const { prescription_id } = req.params;
    const user_id = req.decodedToken.id;

    const prescription = await Prescription.findOne({ _id: prescription_id });
    if (!prescription) {
      return res.status(404).json({
        message: 'prescription not found',
      });
    }
    console.log(prescription)

    if (prescription && (prescription.userId !== user_id)) {
      return res.status(409).json({
        message: 'Sorry, you cannot add usage formula to this prescription',
      });
    }
    // eslint-disable-next-line camelcase
    const { frequency, dose, number_of_times, duration, before_after_meal } = req.body;


    const doc = new UsageFormula({
      frequency,
      dose,
      number_of_times,
      duration,
      before_after_meal,
      user_id,
      prescription_id,
    });
    await doc.save();

    return res.status(201).json({
      message: 'usage formula added successfuly',
      prescription: doc,
    });
  } catch (error) {
    return res.status(500).json({
      status: 500,
      error: `${error.message}` || 'Something went wrong',
    });
  }
};


module.exports = { addFormula };
