const express = require("express");
const router = express.Router();
const incomeController = require("../controllers/income.controller");
const authMiddleware = require('../middleware/auth.middleware');


// Add Expense
router.post("/add", authMiddleware, incomeController.addIncome);

// Get All Expenses
router.get("/all", authMiddleware, incomeController.getAllIncome);

// Delete Expense
router.delete("/:id", authMiddleware, incomeController.deleteExpense);

// Download Excel
router.get("/download/excel", authMiddleware, incomeController.downloadExpenseExcel);

module.exports = router;
