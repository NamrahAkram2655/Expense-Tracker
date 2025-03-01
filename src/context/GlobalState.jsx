import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import PropTypes from "prop-types";

// Initial State
const initialState = {
    transactions: []
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
    function deleteTransaction(id) {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        });
    }

    return (
        <GlobalContext.Provider 
            value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    );
};

// Prop Validation
GlobalProvider.propTypes = {
    children: PropTypes.node.isRequired
};
