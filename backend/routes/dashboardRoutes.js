const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/getDashboard', authMiddleware, dashboardController.getDashboardData);

module.exports = router;
