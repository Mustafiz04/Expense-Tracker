const path = require('path')
const express = require('express');
const app = express();
const bodyParser = require("body-parser")
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({path : './config/config.env'})


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json());

if( process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'))
}

require('./DB/connection');

const transactions = require('./routes/transaction');


app.use('/api/v1/', transactions);

if( process.env.NODE_ENV === 'production' ){
    app.use(express.static('client/build'))

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')) )
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on ${PORT}`));