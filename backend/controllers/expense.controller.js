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


exports.getCategory = async (req, res) => {
    try {
        const result = await expenseManager.getCategory(req);
        return apiResponse.successResponseWithData(res, "Category fetched", result);
    } catch (error) {
        return apiResponse.expectationFailedResponse(res, error.message);
    }
};


exports.getstatistics = async (req, res) => {
    try {
        const result = await expenseManager.getstatistics(req);
        return apiResponse.successResponseWithData(res, "Statistics fetched", result);
    } catch (error) {
        return apiResponse.expectationFailedResponse(res, error.message);
    }
};



exports.getChangePercentage = async (req, res) => {
    try {
        const result = await expenseManager.getChangePercentage(req);
        return apiResponse.successResponseWithData(res, "Statistics for Percentage changed fetched", result);
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

