const apiResponse = require("../helpers/apiResponse");
const IncomeManager = require("../manager/income.manager");
const incomeManager = new IncomeManager();

exports.addIncome = async (req, res) => {
  try {
    const result = await incomeManager.addIncome(req);
    return apiResponse.successResponseWithData(res, "Income added", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.getAllExpense = async (req, res) => {
  try {
    const result = await incomeManager.getAllExpense(req);
    return apiResponse.successResponseWithData(res, "Expenses fetched", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.deleteExpense = async (req, res) => {
  try {
    const result = await incomeManager.deleteExpense(req.params.id);
    return apiResponse.successResponseWithData(res, "Expense deleted", result);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};

exports.downloadExpenseExcel = async (req, res) => {
  try {
    await incomeManager.downloadExpenseExcel(req, res);
  } catch (error) {
    return apiResponse.expectationFailedResponse(res, error.message);
  }
};
