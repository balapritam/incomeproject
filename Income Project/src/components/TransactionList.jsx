import React from 'react';

function TransactionList({ transactions, type }) {
  return (
    <div>
      <h2>{type === 'income' ? 'Income List' : 'Expense List'}</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <strong>{transaction.title}:</strong> ${transaction.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
