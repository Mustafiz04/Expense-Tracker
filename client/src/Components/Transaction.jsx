import React, {useContext} from 'react';
import {GlobalContext} from '../Context/GlobalState';

import { IconButton } from '@material-ui/core';
import { Delete } from '@material-ui/icons';

import { numberWithCommas } from './../utils/format.js';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);
    // console.log(transaction);

    const sign = transaction.amount < 0 ? "-" : "+"

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}RS{numberWithCommas(Math.abs(transaction.amount))}</span>
            {/* <button>
                <IconButton aria-label="delete" onClick={() => deleteTransaction(transaction._id)} className='delete-btn' >
                    <Delete />
                </IconButton>
            </button> */}
            
            
            <div onClick={() => deleteTransaction(transaction._id)} className='delete-btn'>
                <IconButton aria-label="delete">
                    <Delete color="secondary"/>
                </IconButton>
            </div>
        </li>
    )
}
