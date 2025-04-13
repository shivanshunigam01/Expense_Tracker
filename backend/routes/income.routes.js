const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/income.controller");
const authMiddleware = require('../middleware/auth.middleware');


// Add Income
router.post("/add", authMiddleware, incomeController.addIncome);

// Get All Incomes
router.get("/all", authMiddleware, incomeController.getAllIncome);

// Delete Income
router.delete("/:id", authMiddleware, incomeController.deleteExpense);

module.exports = router;
