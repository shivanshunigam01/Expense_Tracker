const apiResponse = require("../helpers/apiResponse");
const DashboardManager = require('../manager/dashboardManager');
const dashboardManager = new DashboardManager();

/**
 * Get Dashboard Data
 */
exports.getDashboardData = async (req, res) => {
    try {
        const result = await dashboardManager.getDashboardData(req);
        if (result) {
            return apiResponse.successResponseWithData(res, "Dashboard Data Fetched Successfully", result);
        } else {
            return apiResponse.notFoundResponse(res, "No data found for the user.");
        }
    } catch (error) {
        return apiResponse.expectationFailedResponse(res, error);
    }
};
