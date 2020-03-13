const express = require('express');

const mainRouter = express.Router();
const users = require('./users/user.route');

mainRouter.use('/api/v1/users', users);

module.exports = mainRouter;
