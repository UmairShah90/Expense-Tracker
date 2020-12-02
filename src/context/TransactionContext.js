import React,{ createContext, useReducer } from "react";
import TransactionReducer from "../reducer/TransactionReducer";

// Make an array of transactions object
const initialTransactions = [];

// Create the context and export it
export const TransactionContext = createContext(initialTransactions);

//create Provider
export const TransactionProvider = ({ children }) => {

  // Use Reducer
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);

  function addTransaction(transactionObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        text: transactionObj.text,
        amount: transactionObj.amount,
      },
    });
  }
  return (
    <TransactionContext.Provider
      value={{
        transactions: state,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
