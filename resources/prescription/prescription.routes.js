const express = require("express");

const router = express.Router();

const prescriptionController = require("./prescriptionController");
const { verifyToken } = require('../../utils/validateToken');

const { addPrescription } = prescriptionController;

router.route("/");
router.route("/add").post(verifyToken, addPrescription);

module.exports = router;
