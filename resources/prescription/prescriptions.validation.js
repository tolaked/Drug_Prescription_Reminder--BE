const Joi = require("joi");

module.exports = {
  validatePrescription(prescription) {
    const schema = {
      drug: Joi.string()
        .min(2)
        .max(50)
        .required(),
      start_Date: Joi.date()
        .required(),
      end_Date: Joi.date()
        .required(),
      completed: Joi.bool(),
      unit: Joi.string()
        .min(2)
        .max(50)
        .required()
    };
    return Joi.validate(prescription, schema);
  },
};
