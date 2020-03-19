require('dotenv').config();
const express = require('express');
const cors = require("cors");

const connectDB = require('./database');
const resources = require('./resources');
const expressMiddlewares = require('./utils/middlewares');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

expressMiddlewares(app);

app.use(resources);

connectDB();

app.get('/', (req, res, next) => {
  try {
    res.status(200).json({
      message: 'welcome to drug_prescription_app',
    });
  } catch (error) {
    next(new Error(error));
  }
});

module.exports = app;
