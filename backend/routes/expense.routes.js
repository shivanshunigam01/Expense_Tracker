const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense.controller");
const authMiddleware = require('../middleware/auth.middleware');


// Add Expense
router.post("/add", authMiddleware, expenseController.addExpense);

// Get All Expenses
router.post("/all", authMiddleware, expenseController.getAllExpense);

// Delete Expense
router.delete("/:id", authMiddleware, expenseController.deleteExpense);

// Download Excel
router.get("/download/excel", authMiddleware, expenseController.downloadExpenseExcel);

module.exports = router;
