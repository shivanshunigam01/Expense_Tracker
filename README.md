
# 💸 Expense Tracker App

A simple yet powerful full-stack **Expense Tracker** application built using **React**, **Node.js**, **Express**, and **SQL**. This app helps users track their daily spending, understand their financial habits, and stay in control with insightful statistics like top spending days, monthly trends, and even future spending predictions.

---

## 📌 About

This Expense Tracker empowers users to:
- ✅ Register and securely log in
- ✅ Record both **expenses** and **incomes**
- ✅ View summaries of their financial activities
- ✅ Download financial reports
- ✅ Monitor and predict spending behavior

Built with a focus on clean architecture, performance, and a smooth user experience.

---

## 🔥 Features

- ➕ Add new **expenses** with amount, category, and date  
- ➕ Add new **income** with amount, source, and date  
- ❌ Delete existing expenses or income  
- 📊 View a **summary** of:
  - Expenses by category
  - Spending over date ranges
- 📉 See monthly trends and predicted expenses
- 📁 Download financial reports
- ✨ Clean and user-friendly interface

---

## 🛠️ Tech Stack

### Frontend
- [React.js](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- MVC Architecture

- 
## Postman Collection
https://drive.google.com/file/d/1gmH64unNFsoXZ1nH8hX1fdSgidu_HiyG/view?usp=sharing

### Database
- SQL (MySQL / PostgreSQL / SQLite)

---

## 🔐 Authentication Note

- Login password is **encrypted on the frontend** using AES before being sent in the payload, ensuring it stays **hidden and secure** in transmission.
- On the backend, the password is **decrypted and hashed** before checking with the database.
- JWT-based login system is used for secure and persistent sessions.

---

## 🗂️ Sample Credentials

Use the following credentials to test login:
- **Email**: `shivanshunigam18@petpooja.com`
- **Password**: `shivanshunigam18@petpooja.com`

---

## 🧾 SQL Setup

- SQL database setup is included.
- All required **tables and stored procedures** are provided in the `database/` directory.

---

## 📂 .env File

Add this in your `backend/.env` file:
PORT=5000
JWT_SECRET="sD3#7kP@!29zLr8q^T5vK0wZ!eF$YxN#"

# App Screenshots

## Register Page
![Register_page](https://github.com/user-attachments/assets/73d6b4aa-1ac4-4f03-8a80-de9eb907fda0)


## Login Page
![Login_page](https://github.com/user-attachments/assets/19abb3bc-d12b-4170-bebe-c66543ecf522)


## Dashboard
![Dashboard](https://github.com/user-attachments/assets/58d8d0ba-e1b7-4443-91a3-766cdb8c529d)


## Income Page
![Income_page](https://github.com/user-attachments/assets/da21ec98-cf91-4d9d-8b36-0a4dae637b15)


## Expense Page
![Expense_page](https://github.com/user-attachments/assets/dd9ba950-6fca-4d64-8d1c-a3bfd9053899)


