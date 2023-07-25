import React, { useState } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import TransactionList from '../components/TransactionList';

function ExpensePage() {
  const [transactions, setTransactions] = useState([]);

  const addExpenseTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="page">
      <h1>Expense Transactions</h1>
      <ExpenseForm addTransaction={addExpenseTransaction} />
      {transactions.length > 0 && (
        <TransactionList transactions={transactions} type="expense" />
      )}
    </div>
  );
}

export default ExpensePage;
