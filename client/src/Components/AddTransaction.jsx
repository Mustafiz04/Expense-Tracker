import React, { useState, useContext } from 'react'
import {GlobalContext} from '../Context/GlobalState';

export const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    // const [text, setText] = useState("");
    // const [amount, setAmount] = useState(0);

    const [data, setData] = useState({
        text : "",
        amount : null,
    })

    const addEvent = (e) => {
        const {value, name} = e.target;

        setData((preValue) => {
            return {
                ...preValue,
                [name] : value
            }
            // if( name === "text" ){
            //     return {
            //         text : value,
            //         amount : preValue.amount
            //     }
            // }else if( name === "amount" ){
            //     return {
            //         text : preValue.text,
            //         amount : value
            //     }
            // }
        } )
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random() * 100000000),
            text : data.text,
            amount : +data.amount
        }
        data.text = "";
        data.amount = 0
        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control' >
                    <label htmlFor='text'>Text</label>
                    <input type='text' name='text' value={data.text} onChange={addEvent} placeholder='Enter Text...'  required></input>
                </div>
                <div className='form-control' >
                    <label htmlFor='amount'>Amount <br /> (negative - expense, positive - income) </label>
                    <input type='number' name='amount' value={data.amount} onChange={addEvent} placeholder='Enter Amount...' required></input>
                </div>
                <button className='btn' >Add transaction</button>
            </form>
        </>
    )
}
