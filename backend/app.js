const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const authRoutes = require('./routes/auth.routes');
const expenseRoutes = require('./routes/expense.routes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const incomeRoutes = require('./routes/income.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Middleware to log incoming API calls with timestamp
app.use((req, res, next) => {
  const time = new Date().toISOString();
  console.log(`[${time}] [API CALL] => ${req.method} ${req.originalUrl}`);
  next();
});

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/income', incomeRoutes);
app.use('/dashboard', dashboardRoutes);

module.exports = app;
