import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log('Transactions in TransactionList:', transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => {
          if (transaction && typeof transaction.id !== 'undefined') {
            return <Transaction key={transaction.id} transaction={transaction} />;
          }
          console.error('Invalid transaction:', transaction);
          return null;
        })}
      </ul>
    </>
  );
};

export default TransactionList