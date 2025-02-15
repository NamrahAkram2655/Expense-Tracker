# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
# Expense Tracker

## Overview
Expense Tracker is a simple and efficient web application built with React and Vite that helps users manage their personal finances. It enables users to track income and expenses, maintain a transaction history, and visualize their financial trends with a profit graph. 
https://budgetsync.netlify.app/ deployed

## Features
- Add and delete transactions (income & expenses)
- Real-time balance overview
- Transaction history display
- Profit graph for financial insights
- State management using Context API and useReducer
- Built with React and Vite for fast performance

## Technologies Used
- React
- Vite
- Context API
- useReducer Hook
- PropTypes for type validation
- CSS for styling

## Installation & Setup
To run this project locally, follow these steps:

### Prerequisites
Make sure you have Node.js installed on your system.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/expense-tracker.git
   ```

2. Navigate to the project directory:
   ```sh
   cd expense-tracker
   ```

3. Install dependencies:
   ```sh
   npm install
   ```

4. Start the development server:
   ```sh
   npm run dev
   ```

5. Open your browser and go to `http://localhost:5173/` to view the application.

## Project Structure
```
expense-tracker/
│── src/
│   ├── components/
│   │   ├── Header/
│   │   ├── Balance/
│   │   ├── IncomeExpenses/
│   │   ├── TransactionList/
│   │   ├── AddTransaction/
│   │   ├── ProfitGraph/
│   ├── context/
│   ├── App.js
│   ├── App.css
│── public/
│── index.html
│── package.json
│── README.md
```

## Usage
- **Adding a Transaction:** Enter the transaction details (name and amount) and click "Add."
- **Deleting a Transaction:** Click the delete button next to a transaction to remove it.
- **Viewing Financial Insights:** The balance and profit graph update automatically based on transactions.

## Contributions
Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.


