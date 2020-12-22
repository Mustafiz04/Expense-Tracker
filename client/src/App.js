import React from 'react';

import { Header } from './Components/Header';
import { Balance } from './Components/Balance';
import { IncomeExpense } from './Components/IncomeExpense';
import { TransactionList } from './Components/TransactionList';
import { AddTransaction } from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

import { DigitalClock } from './Components/DigitalClock';

import './App.css';

const App = () => {
	return (
		<GlobalProvider>
			{/* <DigitalClock /> */}
			<Header />
			<div className='container' >
				<Balance />
				<IncomeExpense />
				<TransactionList />
				<AddTransaction />
			</div>
		</GlobalProvider>
	)
}

export default App;