import { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

function AddTransaction() {
    const [text, setText] = useState('');
    const [income, setIncome] = useState('');
    const [expense, setExpense] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!text.trim()) {
            alert("Please enter a valid transaction name.");
            return;
        }

        if ((!income && !expense) || (isNaN(income) && isNaN(expense))) {
            alert("Please enter a valid income or expense amount.");
            return;
        }

        if (income) {
            const newIncomeTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text: `${text} (Income)`,
                amount: Number(income),
            };
            addTransaction(newIncomeTransaction);
        }

        if (expense) {
            const newExpenseTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text: `${text} (Expense)`,
                amount: -Number(expense), // Expense is stored as negative internally
            };
            addTransaction(newExpenseTransaction);
        }

        // Clear input fields
        setText('');
        setIncome('');
        setExpense('');
    };

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Name</label>
                    <input 
                        type="text" 
                        id="text"
                        value={text} 
                        onChange={(e) => setText(e.target.value)} 
                        placeholder="Enter transaction name..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="income">Income</label>
                    <input 
                        type="number" 
                        id="income"
                        value={income} 
                        onChange={(e) => setIncome(e.target.value)} 
                        placeholder="Enter income amount..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="expense">Expense</label>
                    <input 
                        type="number" 
                        id="expense"
                        value={expense} 
                        onChange={(e) => setExpense(e.target.value)} 
                        placeholder="Enter expense amount..."
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;
