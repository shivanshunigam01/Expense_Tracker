// manager/dashboardManager.js
const DashboardData = require('../data/dashboardData');
const dashboardData = new DashboardData();

/**
 * Dashboard Manager.
 */
class DashboardManager {
    /**
     * Get Dashboard Data by User ID.
     * @param {number} userID
     * @returns {Object}
     */
    async getDashboardData(req) {
        try {
            const result = await dashboardData.fetchDashboardData(req);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = DashboardManager;
