import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

import { numberWithCommas } from './../utils/format.js';

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);

    const income = amount
    .filter(items => items > 0 )
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

    const expense = (amount
    .filter(items => items < 0 )
    .reduce((acc, item) => (acc += item), 0) * -1)
    .toFixed(2);

    return (
        <div className='inc-exp-container' >
            <div>
                <h4>Income</h4>
                <p id='money-plus' className='money plus' >&#8377;{ numberWithCommas(income)}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p id='money-minus' className='money minus' >&#8377;{numberWithCommas(expense)}</p>
            </div>
        </div>
    )
}
