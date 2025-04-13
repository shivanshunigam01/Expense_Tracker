const IncomeData = require("../data/income.data");
const xlsx = require("xlsx");
const fs = require("fs");

class IncomeManager {
    async addIncome(req) {
        const category = req.body.source;
        const { icon, amount, date } = req.body;
        const userId = req.user.userID;

        if (!icon || !category || !amount || !date) {
            throw new Error("All fields are required");
        }

        return await IncomeData.addIncome(userId, icon, category, amount, date);
    }

    async getAllIncome(req) {
        const userId = req.user.userID;
        return await IncomeData.fetchIncomeByUser(userId);
    }

    async deleteExpense(expenseId) {
        return await IncomeData.removeExpense(expenseId);
    }

}

module.exports = IncomeManager;
