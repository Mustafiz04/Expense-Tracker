const express = require('express');
const router = express.Router();

const Transaction = require('../model/transaction');


router.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        // console.log(transactions)

        return res.status(200).json({
            success : true,
            count : transactions.length,
            data : transactions
        });
    } catch (error) {
        return res.status(500).json({
            success : false,
            error : 'Server Error'
        });
    }
})

router.post("/addtransactions", async (req, res) => {
    try {
        // const {text, amount} = req.body;
        // console.log(req.body);
        const transaction = await Transaction.create(req.body);
        // console.log(transaction);
        return res.status(201).json({
            success : true,
            data : transaction
        });
    } catch (error) {
        try {
            if( error.name === 'ValidationError' ){
                const msgs = Object.values(error.errors).map(val => val.message);

                return res.status(400).json({
                    succes : false,
                    error : msgs
                })
            }
        } catch (error) {
            return res.status(500).json({
                succes : false,
                error : 'Server Error'
            })
        }
    }
})

router.delete("/transactions/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if( !transaction ){
            return res.status(404).json({
                status : false,
                error : "No transaction found"
            })
        }

        await transaction.remove();

        return res.status(200).json({
            status : true,
            message : "Transaction deleted"
        })
    } catch (error) {
        return res.status(500).json({
            succes : false,
            error : 'Server Error'
        })
    }
})


module.exports = router