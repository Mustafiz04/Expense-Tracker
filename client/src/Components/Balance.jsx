import React, {useContext} from 'react'
import {GlobalContext} from '../Context/GlobalState'

import { numberWithCommas } from './../utils/format.js';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, item) => (acc += item), 0 ).toFixed(2);

    return (
        <>
            <h4> Your Balance </h4>
            <h1 id='balance'> Rs{numberWithCommas(total)}</h1>
        </>
    )
}
