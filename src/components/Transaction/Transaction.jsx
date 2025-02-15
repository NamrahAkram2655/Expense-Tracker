import PropTypes from "prop-types";
import { GlobalContext } from "../../context/GlobalState";
import { useContext } from "react";

export default function Transaction({ transaction }) {
    const { deleteTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? "-" : "+";

    return (
        <li className={transaction.amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                x
            </button>
        </li>
    );
}

// Prop Validation
Transaction.propTypes = {
    transaction: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        text: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
    }).isRequired
};
