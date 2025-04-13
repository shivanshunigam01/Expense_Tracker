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
    const { p_category, p_fromDate, p_toDate } = req.body;
    return await ExpenseData.fetchExpensesByUser(userId,p_category, p_fromDate, p_toDate);
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

  async downloadExpenseExcel(req, res) {
    const userId = req.user.id;
    const expenses = await ExpenseData.fetchExpensesByUser(userId);

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

module.exports = ExpenseManager;
