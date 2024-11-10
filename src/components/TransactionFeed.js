// src/components/TransactionFeed.js
import React, { useState, useEffect } from 'react';
import { fetchTransactions } from '../utils/blockchain';
import AudioController from './AudioController';
import PianoKeys from './PianoKeys';

const TransactionFeed = () => {
  const [transactions, setTransactions] = useState([]);
  const [transactionType, setTransactionType] = useState(null);

  useEffect(() => {
    const loadTransactions = async () => {
      const txs = await fetchTransactions();
      setTransactions(txs);

      // Determine transaction type and set for AudioController
      const latestTx = txs[0];
      if (latestTx) {
        if (latestTx.to.includes('0xPopAddress')) {
          setTransactionType('pop');
        } else if (latestTx.to.includes('0xHemiAddress')) {
          setTransactionType('hemi');
        } else {
          setTransactionType('ethereum');
        }
      }
    };

    loadTransactions();
    const interval = setInterval(loadTransactions, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Recent Ethereum Transactions</h2>
      <ul>
        {transactions.map(tx => (
          <li key={tx.hash}>
            {tx.from} -> {tx.to} : {tx.value} ETH
          </li>
        ))}
      </ul>
      <AudioController transactionType={transactionType} />
      <PianoKeys 
        activeNote={transactionType === 'hemi' ? 'C4' : (transactionType === 'pop' ? 'G4' : 'A4')} 
      />
    </div>
  );
};

export default TransactionFeed;
