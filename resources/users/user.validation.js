const Joi = require("joi");

module.exports = {
  validateUser(user) {
    const schema = {
      firstName: Joi.string()
        .min(2)
        .max(50)
        .required(),
      lastName: Joi.string()
        .min(1)
        .max(50)
        .required(),
      email: Joi.string()
        .min(2)
        .max(50)
        .required()
        .email(),
      age: Joi.number(),
      password: Joi.string()
        .min(5)
        .max(50)
        .required(),
    };
    return Joi.validate(user, schema);
  },
};
