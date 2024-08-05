import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  
  console.log('Transactions in Balance:', transactions);

  const amounts = transactions.map(transaction => {
    if (transaction && typeof transaction.amount !== 'undefined') {
      return transaction.amount;
    }
    console.error('Invalid transaction:', transaction);
    return 0;
  });

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};

export default Balance;