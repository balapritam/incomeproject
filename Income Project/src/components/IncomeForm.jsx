import React, { useState } from 'react';

function IncomeForm({ addTransaction }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const transaction = { title, amount };
    addTransaction(transaction);
    setTitle('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Income Form</h2>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={handleTitleChange} />
      </div>
      <div>
        <label>Amount:</label>
        <input type="number" value={amount} onChange={handleAmountChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default IncomeForm;
