const Joi = require("joi");

module.exports = {
  validateUser(prescription) {
    const schema = {
      drug: Joi.string()
        .min(2)
        .max(50)
        .required(),
      userId: Joi.number()
        .min(1)
        .max(50)
        .required(),
      start_Date: Joi.date()
        .required(),
      end_Date: Joi.date()
        .required(),
      completed: Joi.bool(),
    };
    return Joi.validate(prescription, schema);
  },
};
