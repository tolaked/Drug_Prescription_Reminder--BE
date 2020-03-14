const express = require('express');

const mainRouter = express.Router();
const users = require('./users/user.routes');
const prescription = require('./prescription/prescription.routes');

mainRouter.use('/api/v1/users', users);
mainRouter.use('/api/v1/prescription', prescription);

module.exports = mainRouter;
