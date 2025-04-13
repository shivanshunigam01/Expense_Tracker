const db = require("../config/db"); 

class ExpenseData {
  static async insertExpense(userId, icon, category, amount, date) {
    const [result] = await db.execute("CALL usp_addExpense(?, ?, ?, ?, ?)", [
      userId,
      icon,
      category,
      amount,
      date,
    ]);
    return result;
  }

  static async fetchExpensesByUser(userId, category = null, fromDate = null, toDate = null) {
    const [result] = await db.execute("CALL usp_getAllExpense(?, ?, ?, ?)", [
      userId,
      category,
      fromDate,
      toDate,
    ]);
    return result[0];
  }


  static async fetchCategoryByUser(userID) {
    const [result] = await db.execute("CALL usp_getExpenseCategories(?)", [
        userID,
    ]);
    return result[0];
  }


  
  static async fetchStatisticsByUser(userID) {
    const [result] = await db.execute("CALL usp_getUserStatisticsByUserId(?)", [
        userID,
    ]);
    return result;
  }
  
  
  static async fetchChangePercentageByUser(userID) {
    const [result] = await db.execute("CALL usp_GetMonthlyExpenditureChange(?)", [
        userID,
    ]);
    return result;
  }


  static async removeExpense(expenseId) {
    const [result] = await db.execute("CALL usp_deleteExpenseById(?)", [expenseId]);
    return result;
  }
}

module.exports = ExpenseData;
