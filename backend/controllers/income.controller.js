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

exports.getAllIncome = async (req, res) => {
    try {
        const result = await incomeManager.getAllIncome(req);
        return apiResponse.successResponseWithData(res, "Income fetched", result);
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

