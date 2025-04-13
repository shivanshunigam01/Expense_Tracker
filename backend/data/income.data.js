const db = require("../config/db");

class IncomeData {
    static async addIncome(userId, icon, category, amount, date) {
        const [result] = await db.execute("CALL usp_addIncome(?, ?, ?, ?, ?)", [
            userId,
            icon,
            category,
            amount,
            date,
        ]);
        return result;
    }

    static async fetchIncomeByUser(userId) {
        const [result] = await db.execute("CALL usp_getAllIncome(?)", [userId]);
        return result[0];
    }

    static async removeExpense(expenseId) {
        const [result] = await db.execute("CALL usp_deleteExpenseById(?)", [expenseId]);
        return result;
    }
}

module.exports = IncomeData;
