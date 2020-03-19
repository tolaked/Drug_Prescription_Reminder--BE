const express = require("express");

const router = express.Router();

const usageFormula = require("./usageFormulaController");
const { verifyToken } = require('../../utils/validateToken');

const { addFormula, getUsageFormula } = usageFormula;

router.post("/add/:prescription_id", verifyToken, addFormula);
router.get('/:_id', verifyToken, getUsageFormula);

module.exports = router;
