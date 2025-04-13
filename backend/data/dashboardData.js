const db = require('../config/db');

class DashboardData {
    async fetchDashboardData(req) {
        const userID = req.user.userID;
        const procedureName = "usp_getDashboardData";

        try {
            const [rows] = await db.query(`CALL ${procedureName}(?)`, [userID]);

            const dashboardJSONRow = rows[0][0];
            const recentTransactions = rows[1];
            return {
                totalBalance: parseFloat(dashboardJSONRow.total_balance),
                totalIncome: parseFloat(dashboardJSONRow.total_income),
                totalExpense: parseFloat(dashboardJSONRow.total_expense),
                last30DaysExpense: parseFloat(dashboardJSONRow.last_30_days_expense),
                last60DaysIncome: parseFloat(dashboardJSONRow.last_60_days_income),
                recentTransaction: recentTransactions
            };
        } catch (error) {
            console.error("Error fetching dashboard data:", error.message);
            throw error;
        }
    }
}

module.exports = DashboardData;