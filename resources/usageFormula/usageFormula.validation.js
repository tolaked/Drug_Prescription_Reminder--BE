const Joi = require("joi");

module.exports = {
  validateUsageFormula(usageFormula) {
    const schema = {
      frequency: Joi.string()
        .min(2)
        .max(50)
        .required(),
      number_of_times: Joi.date()
        .required(),
      dose: Joi.number()
        .required(),
      duration: Joi.string()
        .min(2)
        .max(),
      before_after_meal: Joi.string()
        .min(2)
        .max(50)
        .required(),
    };
    return Joi.validate(usageFormula, schema);
  },
};
