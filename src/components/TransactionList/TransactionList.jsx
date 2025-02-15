import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";
import Transaction from "../Transaction/Transaction";

export default function TransactionList() {
  const { transactions } = useContext(GlobalContext);

  if (!transactions || !Array.isArray(transactions)) {
    return <div>Loading...</div>; // Ensure transactions is always an array
  }

  if (!transactions || !Array.isArray(transactions)) {
    return <div>Loading...</div>; // Ensure transactions is always an array
  }

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
}
