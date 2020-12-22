import React, { useContext, useEffect } from 'react'
import {GlobalContext} from '../Context/GlobalState'
import {Transaction} from './Transaction';

export const TransactionList = () => {

    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions()
    }, [])

    // console.log(transactions);
    return (
        <>
            <h3>History</h3>
            <ul id='list' className='list'>
                {transactions.map( transaction => 
                    (<Transaction transaction = {transaction} />)
                ) }
            </ul>
        </>
    )
}
