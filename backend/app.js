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

app.use('/auth', authRoutes);
app.use('/expenses', expenseRoutes);
app.use('/income', incomeRoutes);
app.use('/dashboard', dashboardRoutes);


module.exports = app;
