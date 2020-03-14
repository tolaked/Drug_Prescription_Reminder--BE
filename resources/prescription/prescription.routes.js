const express = require("express");

const router = express.Router();

const prescriptionController = require("./prescriptionController");
const { verifyToken } = require('../../utils/validateToken');

const { addPrescription, deletePrescription } = prescriptionController;

router.route("/");
router.route("/add").post(verifyToken, addPrescription);
router.delete('/:_id', verifyToken, deletePrescription);

module.exports = router;
