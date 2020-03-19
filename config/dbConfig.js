const dotenv = require('dotenv');

dotenv.config();

let connectionUrl = 'mongodb://localhost/drug_prescription_app';

if (process.env.NODE_ENV === 'production') {
  connectionUrl = process.env.MONGO_URL;
}


module.exports = { connectionUrl };
