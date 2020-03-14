const express = require("express");

const router = express.Router();

const usageFormula = require("./usageFormulaController");
const { verifyToken } = require('../../utils/validateToken');

const { addFormula } = usageFormula;

router.route("/");
router.route("/add/:prescription_id").post(verifyToken, addFormula);
// router.delete('/:_id', verifyToken, deletePrescription);

module.exports = router;
