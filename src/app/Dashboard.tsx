"use client"; 

import React, { useEffect, useState } from 'react';
import CashAdvanceModal from './Modal';
import { TRANSACTIONS, TransactionProps, getCurrentDate } from './consts';
import { TransactionCard } from './TransactionCard';
import { FilterBar } from './FilterBar';

export default function Dashboard() {
  const [modalOpen, setOpen] = useState(false);
  const [balance, setBalance] = useState<number>(0);
  const [pendingDeposits, setPendingDeposits] = useState<number>(0);
  const [pendingWithdrawals, setPendingWithdrawals] = useState<number>(0);
  const [transactions, setTransactions] = useState<TransactionProps[]>(TRANSACTIONS);
  const [statusFilter, setStatusFilter] = useState<string | null>(null);
  const [amountFilter, setAmountFilter] = useState<number | ''>('');

  const sumPendingDeposits = ()=> {
    return transactions
      .filter(transaction => transaction.status === 'Pending' && transaction.type === 'Deposit')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }
  const sumPendingWithdrawals = () => {
    return transactions
      .filter(transaction => transaction.status === 'Pending' && transaction.type === 'Withdrawal')
      .reduce((sum, transaction) => sum + transaction.amount, 0);
  }

  const calculateAvailableBalance=()=> {
    return transactions
      .filter(transaction => transaction.status === 'Completed')
      .reduce((balance, transaction) => {
        if (transaction.type === 'Deposit') {
          return balance + transaction.amount;
        } else if (transaction.type === 'Withdrawal') {
          return balance - transaction.amount; 
        }
        return balance;
      }, 0); 
  }

  useEffect(() => {
    setBalance(calculateAvailableBalance())
    setPendingDeposits(sumPendingDeposits())
    setPendingWithdrawals(sumPendingWithdrawals())
  }, [transactions]);
  

  const addTransaction = (amount: string) => {
    const transaction = { date: getCurrentDate(), amount: parseInt(amount), status: 'Pending', id: crypto.randomUUID(), type: 'Deposit' } as TransactionProps
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  }

  const handleClick = () => {
    setOpen(true);
  }

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesStatus = statusFilter ? transaction.status === statusFilter : true;
    const matchesAmount = amountFilter ? transaction.amount >= amountFilter : true;
    return matchesStatus && matchesAmount;
  }).slice(-5);

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-black">
      <div className="max-w-lg mx-auto bg-slate-200 rounded-lg shadow p-6">
        <h2 className="text-3xl font-bold mb-4">Account Dashboard</h2>
        <FilterBar setStatusFilter={setStatusFilter} statusFilter={statusFilter} amountFilter={amountFilter} setAmountFilter={setAmountFilter} />
        <h2 className="text-2xl font-bold mb-4">Available Balance: <span className={`text-${balance > 0 ? 'green' : 'red'}-600`}>${balance}</span></h2>
        <div className="flex justify-between">
          <p className="text-md mb-4">Pending Withdrawels: <span className="text-red-600">${pendingWithdrawals}</span></p>
          <p className="text-md mb-4">Pending Deposits: <span className="text-green-600">${pendingDeposits}</span></p>
        </div>

        <button
          onClick={()=>handleClick()}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition mb-6"
        >
          Request a Cash Advance
        </button>

        <h3 onClick={handleClick} className="text-xl font-semibold mb-2">Recent Transactions</h3>
        <div className="space-y-3">
          {filteredTransactions.map((transaction) => (
            <TransactionCard transaction={transaction} key={transaction.id} />
          ))}
        </div>
      </div>

      {modalOpen && (
        <CashAdvanceModal onClose={()=>setOpen(false)} addTransaction={addTransaction} />
      )}
    </div>
  );
}
