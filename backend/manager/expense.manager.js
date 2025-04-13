const ExpenseData = require("../data/expense.data");
const xlsx = require("xlsx");
const fs = require("fs");

class ExpenseManager {
    async addExpense(req) {
        const { icon, category, amount, date } = req.body;
        const userId = req.user.userID;

        if (!icon || !category || !amount || !date) {
            throw new Error("All fields are required");
        }

        return await ExpenseData.insertExpense(userId, icon, category, amount, date);
    }

    async getAllExpense(req) {
        const userId = req.user.userID;
        const p_category = req.body.p_category || null;
        const p_fromDate = req.body.p_fromDate || null;

        const p_toDate = req.body.p_toDate || null;

        return await ExpenseData.fetchExpensesByUser(userId, p_category, p_fromDate, p_toDate);
    }

    async getCategory(req) {
        const userId = req.user.userID;
        return await ExpenseData.fetchCategoryByUser(userId);
    }



    async getstatistics(req) {
        const userId = req.user.userID;
        return await ExpenseData.fetchStatisticsByUser(userId);
    }


    async getChangePercentage(req) {
        const userId = req.user.userID;
        return await ExpenseData.fetchChangePercentageByUser(userId);
    }
    async deleteExpense(expenseId) {
        return await ExpenseData.removeExpense(expenseId);
    }


}

module.exports = ExpenseManager;
