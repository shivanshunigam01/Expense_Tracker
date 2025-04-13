const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expense.controller");
const authMiddleware = require('../middleware/auth.middleware');


// Add Expense
router.post("/add", authMiddleware, expenseController.addExpense);

// Get All Expenses
router.post("/all", authMiddleware, expenseController.getAllExpense);

//Get Category
router.get("/getCategory", authMiddleware, expenseController.getCategory);

//Get statistics
router.get("/getStatistics", authMiddleware, expenseController.getstatistics);
router.get("/getChangePercentage", authMiddleware, expenseController.getChangePercentage);


// Delete Expense
router.delete("/:id", authMiddleware, expenseController.deleteExpense);


module.exports = router;
