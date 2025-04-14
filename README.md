# 💸 Expense Tracker

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB.svg?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933.svg?logo=node.js)

A comprehensive full-stack **Expense Tracker** application built with modern web technologies. Take control of your finances with powerful tracking, visualization, and predictive tools.

<p align="center">
  <img src="https://github.com/user-attachments/assets/58d8d0ba-e1b7-4443-91a3-766cdb8c529d" alt="Dashboard Preview" width="80%">
</p>

## ✨ Highlights

- **Secure Authentication** - Encrypted password handling and JWT-based sessions
- **Comprehensive Tracking** - Record both expenses and income with detailed categorization
- **Powerful Analytics** - Visualize spending patterns and identify financial trends
- **Predictive Insights** - Forecast future spending based on historical data

## 🚀 Features

| Feature | Description |
|---------|-------------|
| 💰 Expense Management | Add, edit, and categorize all your expenses |
| 💵 Income Tracking | Record all sources of income with detailed information |
| 📊 Visual Analytics | Interactive charts and graphs to visualize your financial data |
| 🔮 Predictive Analysis | Spending predictions based on your history |
| 📱 Responsive Design | Seamless experience across desktop and mobile devices |
| 🔒 Secure Authentication | Enterprise-grade security for your financial data |

## 🛠️ Technology Stack

### Frontend
- **React.js** - Component-based UI development
- **Redux** - State management for complex application data
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling
- **React Icons** - Beautiful icon integration

### Backend
- **Node.js** - JavaScript runtime for server-side logic
- **Express.js** - Fast, unopinionated web framework
- **MVC Architecture** - Clean, maintainable code structure
- **JWT Authentication** - Secure, stateless authentication

### Database
- **SQL** - Robust relational data storage (You can find the dump here: Expense_Trackers\backend\database\expense_trackerFull.sql)

## 🔐 Security Implementation

Our authentication system prioritizes security:

1. Passwords are **encrypted on the frontend** using AES before transmission
2. Server-side processing includes **decryption and secure hashing**
3. **JWT tokens** provide secure, stateless session management
4. All sensitive operations require proper authentication

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- SQL database (MySQL/PostgreSQL/SQLite)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/shivanshunigam01/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies
   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. Set up environment variables
   ```
   # backend/.env
   PORT=5000
   JWT_SECRET="sD3#7kP@!29zLr8q^T5vK0wZ!eF$YxN#"
   ```

4. Set up the database
   - Execute SQL scripts from the `database/` directory

5. Start the application
   ```bash
   # Start backend (from backend directory)
   npm run dev

   # Start frontend (from frontend directory)
   npm run dev
   ```

## 📱 Application Screenshots

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/73d6b4aa-1ac4-4f03-8a80-de9eb907fda0" alt="Register Page" width="100%"><br><em>Registration</em></td>
    <td><img src="https://github.com/user-attachments/assets/19abb3bc-d12b-4170-bebe-c66543ecf522" alt="Login Page" width="100%"><br><em>Login</em></td>
  </tr>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/da21ec98-cf91-4d9d-8b36-0a4dae637b15" alt="Income Page" width="100%"><br><em>Income Tracking</em></td>
    <td><img src="https://github.com/user-attachments/assets/dd9ba950-6fca-4d64-8d1c-a3bfd9053899" alt="Expense Page" width="100%"><br><em>Expense Management</em></td>
  </tr>
</table>

## 🔍 API Testing

A comprehensive Postman collection is available for testing all API endpoints:
[Download Postman Collection](https://drive.google.com/file/d/1gmH64unNFsoXZ1nH8hX1fdSgidu_HiyG/view?usp=sharing)

## 🧪 Test Credentials

For quick testing, use the following demo credentials:
- **Email**: `shivanshunigam18@petpooja.com`
- **Password**: `shivanshunigam18@petpooja.com`

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

<p align="center">
  Made with ❤️ for better financial management
</p>
