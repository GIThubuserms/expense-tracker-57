import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

 const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => {
    if (transaction && typeof transaction.amount !== 'undefined') {
      return transaction.amount;
    }
    console.error('Invalid transaction:', transaction);
    return 0;
  });

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  );

  return (
    <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
  <p className="money plus">+${income}</p>
        </div>
        <div>
          <h4>Expense</h4>
  <p className="money minus">-${expense}</p>
        </div>
      </div>
  )
}
export default IncomeExpenses;