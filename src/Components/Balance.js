import React, { useState, useContext } from "react";
import { TransactionContext } from "../context/TransactionContext";
import "../styles/balance.css";

const Balance = () =>  {
  const [newText, setText] = useState("");
  let [newAmount, setAmount] = useState("");
  let {transactions, addTransaction} = useContext(TransactionContext);

  // Transaction addition handler function
  const additionHandler = () => {
    if (Number(newAmount) === 0) {
      alert("Please give an Amount!");
      return false;
    } 
      
    
    addTransaction({
      amount: Number(newAmount),
      text: newText,
    });
    setText("");
    setAmount("");
  };

  const incomeHandler = (event) => {
    event.preventDefault();
    if (newAmount < 0) {
      alert("You can't Enter Negative Amount");
      setAmount("");
      setText("");
      return false;
    } 
    setAmount(newAmount);
    additionHandler();
  };

  const expenseHandler = (event) => {
    event.preventDefault();
    if (newAmount < 0) {
      alert("You can't Enter Negative Amount");
      setAmount("");
      setText("");
      return false;
    }
    newAmount *= -1;
    setAmount(newAmount);
    additionHandler();
  };
  // Function to calculate total income
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income += transactions[i].amount;
    }
    return income;
  };
  // Function to calculate total expense
  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0) expense += transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="balance-container">
      <h1 className="balance-heading">
        Current Balance: <span> ${getIncome() + getExpense()} </span>
      </h1>

      <div className="income-expense-container">
        <h2 className="income">
          Income
          <br />
          <span> ${getIncome()} </span>
        </h2>

        <h2 className="expense">
          Expense
          <br /> <span> ${getExpense()} </span>
        </h2>
      </div>

      <form className="transaction-form">
        <label htmlFor="text">Text</label>
        <input
          id="text"
          placeholder="Enter Your Expense/Income"
          required
          autoFocus
          type="text"
          value={newText}
          onChange={(event) => setText(event.target.value)}
        />
        <label htmlFor="amount">Amount</label>
        <input
          id="amount"
          placeholder="Enter An Amount..."
          type="number"
          required
          autoFocus
          value={newAmount}
          onChange={(event) => setAmount(event.target.value)}
        />
        <br />

        <div className="buttons-container">
          <button
            className="submit-btn add-income-btn"
            type="submit"
            onClick={incomeHandler}
          >
            Add Income
          </button>
          <button
            className="submit-btn add-expense-btn"
            type="submit"
            onClick={expenseHandler}
          >
            Add Expense
          </button>
        </div>
      </form>
    </div>
  );
}

export default Balance;
