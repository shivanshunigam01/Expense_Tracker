const apiResponse = require("../helpers/apiResponse");
const ExpenseManager = require("../manager/expense.manager");
const expenseManager = new ExpenseManager();

exports.addExpense = async (req, res) => {
  try {
    const result = await expenseManager.addExpense(req);
    return apiResponse.successResponseWithData(res, "Expense added", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.getAllExpense = async (req, res) => {
  try {
    const result = await expenseManager.getAllExpense(req);
    return apiResponse.successResponseWithData(res, "Expenses fetched", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const result = await expenseManager.deleteExpense(req.params.id);
    return apiResponse.successResponseWithData(res, "Expense deleted", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.downloadExpenseExcel = async (req, res) => {
  try {
    await expenseManager.downloadExpenseExcel(req, res);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};
