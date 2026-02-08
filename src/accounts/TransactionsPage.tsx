import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTransactions } from "../services/bankingApi";
import type { Transaction } from "../types/banking";
import './accounts.css';

/**
 * Transaction list for a specific account.
 */
export default function TransactionsPage() {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (accountId) {
      fetchTransactions(accountId).then(setTransactions);
    }
  }, [accountId]);

  return (
    <div className="trnx-table-container" >
      <h2 className="gradient-text">Transactions</h2>

      <table aria-label="Transactions table" style={{width: '100%'}}>
        <thead>
          <tr>
            <th align="left">Date</th>
            <th align="left">Description</th>
            <th align="right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx) => (
            <tr key={tx.id}>
              <td>{tx.date}</td>
              <td>{tx.description}</td>
              <td align="right">{tx.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}