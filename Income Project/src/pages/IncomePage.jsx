import React, { useState } from 'react';
import IncomeForm from '../components/IncomeForm';
import TransactionList from '../components/TransactionList';

function IncomePage() {
  const [transactions, setTransactions] = useState([]);

  const addIncomeTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  return (
    <div className="page">
      <h1>Income Transactions</h1>
      <IncomeForm addTransaction={addIncomeTransaction} />
      {transactions.length > 0 && (
        <TransactionList transactions={transactions} type="income" />
      )}
    </div>
  );
}

export default IncomePage;
