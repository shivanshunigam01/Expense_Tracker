const IncomeData = require("../data/income.data");
const xlsx = require("xlsx");
const fs = require("fs");

class IncomeManager {
  async addIncome(req) {
    const { icon, category, amount, date } = req.body;
    const userId = req.user.userID;

    if (!icon || !category || !amount || !date) {
      throw new Error("All fields are required");
    }

    return await IncomeData.addIncome(userId, icon, category, amount, date);
  }

  async getAllExpense(req) {
    const userId = req.user.userID;
    return await IncomeData.fetchExpensesByUser(userId);
  }

  async deleteExpense(expenseId) {
    return await IncomeData.removeExpense(expenseId);
  }

  async downloadExpenseExcel(req, res) {
    const userId = req.user.id;
    const expenses = await IncomeData.fetchExpensesByUser(userId);

    const data = expenses.map((item) => ({
      Category: item.category,
      Amount: item.amount,
      Date: item.date,
    }));

    const wb = xlsx.utils.book_new();
    const ws = xlsx.utils.json_to_sheet(data);
    xlsx.utils.book_append_sheet(wb, ws, "Expenses");

    const filePath = "expense_details.xlsx";
    xlsx.writeFile(wb, filePath);
    res.download(filePath, () => fs.unlinkSync(filePath));
  }
}

module.exports = IncomeManager;
