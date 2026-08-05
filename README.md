# 💰 FinTrack - Personal Finance Management System

<p align="center">
  <b>A modern full-stack personal finance tracker built to manage income, expenses, savings, and financial insights.</b>
</p>

---

## 📌 About The Project

**FinTrack** is a full-stack personal finance management application that helps users efficiently track their financial activities.

The application provides a clean and intuitive dashboard where users can monitor their balance, manage income and expenses, analyze spending patterns, and gain better control over their financial decisions.

FinTrack is built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)** with a modern UI designed using **Tailwind CSS**.

---

# ✨ Features

## 🔐 Authentication & User Management

- User registration and login
- Secure user authentication
- Personalized dashboard
- User profile management
- Protected user data

---

## 📊 Financial Dashboard

- View total balance
- Track monthly income
- Track monthly expenses
- Monitor savings rate
- View recent transactions
- Financial overview dashboard
- Category-based expense analysis

---

## 💵 Income Management

- Add income records
- Manage income sources
- View income history
- Track earnings over time

---

## 💸 Expense Management

- Add daily expenses
- Categorize expenses
- View expense history
- Analyze spending habits
- Manage financial records

---

## 📈 Analytics & Insights

- Income and expense comparison
- Savings tracking
- Expense distribution
- Financial overview visualization
- Spending category analysis

---

# 🖥️ Screenshots

## Dashboard

![Dashboard](./screenshots/dashboard.png)

---

## Financial Overview

![Financial Overview](./screenshots/overview.png)

---

# 🛠️ Tech Stack

## Frontend

- React.js
- Tailwind CSS
- JavaScript
- React Router
- Axios

## Backend

- Node.js
- Express.js
- REST API

## Database

- MongoDB
- Mongoose

## Tools & Technologies

- Git
- GitHub
- VS Code
- Postman
- npm

---

# 📂 Project Structure

```
FinTrack/
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   ├── services/
│   │   └── App.jsx
│   │
│   └── package.json
│
├── backend/
│   │
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   └── server.js
│
└── README.md
```

---

# ⚙️ Installation & Setup

Follow these steps to run FinTrack locally.

## 1. Clone Repository

```bash
git clone https://github.com/KashishTanweer/FinTrack.git
```

Navigate into the project:

```bash
cd FinTrack
```

---

# 🔹 Backend Setup

Go to backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file inside the backend folder:

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Start the backend server:

```bash
npm run dev
```

Backend will run on:

```
http://localhost:4000
```

---

# 🔹 Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the frontend application:

```bash
npm run dev
```

Frontend will run on:

```
http://localhost:5173
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user |

---

## Transactions

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/transactions` | Get all transactions |
| POST | `/api/transactions` | Add transaction |
| PUT | `/api/transactions/:id` | Update transaction |
| DELETE | `/api/transactions/:id` | Delete transaction |

---

# 🏗️ System Architecture

```
              User
                |
                |
        React Frontend
                |
                |
          REST API
                |
                |
      Node.js + Express Server
                |
                |
            MongoDB
```

---

# 🚀 Future Improvements

- 📱 Fully responsive mobile application
- 🌙 Dark mode support
- 📊 Advanced financial reports
- 📄 Export transactions as PDF/CSV
- 🔔 Expense reminders
- 🤖 AI-based financial recommendations
- 💳 Budget planning system
- 📈 More detailed analytics

---


# 👨‍💻 Author
Kashish Tanweer