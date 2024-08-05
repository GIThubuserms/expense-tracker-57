import React, { useState } from 'react';
import { useGlobalContext } from '../context/GlobalState';

function AddTransaction() {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');

  const { addTransaction } = useGlobalContext();

  const submit = (e) => {
    e.preventDefault();

    const newTrans = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount,
    };

    addTransaction(newTrans);
    setText('');
    setAmount('');
  };

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={submit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
