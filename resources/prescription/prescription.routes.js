const express = require("express");

const router = express.Router();

const prescriptionController = require("./prescriptionController");

const { addPrescription } = prescriptionController;

router.route("/");
router.route("/register").post(addPrescription);

module.exports = router;
