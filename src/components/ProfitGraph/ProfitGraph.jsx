import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function ProfitGraph() {
    const { transactions } = useContext(GlobalContext);

    // Group transactions by date
    const groupedData = transactions.reduce((acc, transaction) => {
        const date = new Date().toLocaleDateString();
        if (!acc[date]) {
            acc[date] = { date, income: 0, expense: 0, profit: 0, loss: 0 };
        }
        if (transaction.amount > 0) {
            acc[date].income += transaction.amount;
        } else {
            acc[date].expense += Math.abs(transaction.amount);
        }
        acc[date].profit = acc[date].income - acc[date].expense;

        if (acc[date].profit >= 0) {
            acc[date].loss = 0; 
        } else {
            acc[date].loss = Math.abs(acc[date].profit);
            acc[date].profit = 0;
        }

        return acc;
    }, {});

    const chartData = Object.values(groupedData);

    return (
        <div className="chart-container">
            <h3>Profit & Loss Overview</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="income" fill="#82ca9d" name="Income" />
                    <Bar dataKey="expense" fill="#ff6b6b" name="Expense" />
                    <Bar dataKey="profit" fill="#4caf50" name="Profit" />
                    <Bar dataKey="loss" fill="#d32f2f" name="Loss" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
