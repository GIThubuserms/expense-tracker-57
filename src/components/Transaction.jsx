import React from 'react'
import { useGlobalContext } from '../context/GlobalState'


function Transaction({ transaction }) {

    const{delTransaction}=useGlobalContext()

    const sign=transaction.amount>0? "+":'-'
    return (
        <>
            <li className={transaction.amount>0? "plus":"minus"}>
                {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span><button onClick={(e)=>delTransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </>
    )
}

export default Transaction
