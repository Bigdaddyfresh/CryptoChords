
import Web3 from 'web3';

const web3 = new Web3('https://mainnet.infura.io/v3/be61d87c0f0c497e9a29643cbf4cb78d');

export const fetchTransactions = async () => {
  const latestBlock = await web3.eth.getBlock('latest', true);
  const transactions = latestBlock.transactions.map(tx => ({
    hash: tx.hash,
    from: tx.from,
    to: tx.to,
    value: web3.utils.fromWei(tx.value, 'ether'),
    gas: tx.gas,
    timestamp: new Date(),
  }));
  return transactions;
};
