import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchTransactions } from "../services/bankingApi";
import type { Transaction } from "../types/banking";
import { formatDate } from "../utils/dateFormat";
import { formatAmount } from "../utils/amountFormat";
import { iconsMap } from "../assets/iconsMap";
import LoadingSpinner from "../components/LoadingSpinner";
import './accounts.css';

/**
 * Transaction list for a specific account.
 */
export default function TransactionsPage() {
  const { accountId } = useParams();
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [visibleCount, setVisibleCount] = useState(10);
  const bottomRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (accountId) {
      setLoading(true);
      fetchTransactions(accountId).then((data) => {
        setTransactions(data);
        setVisibleCount(10);
      }).finally(() => {
        setLoading(false);
      });
    }
  }, [accountId]);

  const visibleTransactions = transactions.slice(0, visibleCount);
  const hasMore = visibleCount < transactions.length;

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);

    setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const handleBackClick = () => {
    window.history.back();
  };

  const handleExportClick = () => {
    const header = 'Date,Description,Payment Type,Amount';
    const rows = transactions.map(tx => `${formatDate(tx.date)},${tx.description},${tx.paymentType},${formatAmount(tx.amount)}`);
    const csvContent = [header, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });

    const link = document.createElement("a");
    link.setAttribute("href", URL.createObjectURL(blob));
    link.setAttribute("download", `transactions_${accountId}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="trnx-table-container" >
      <header>
        <h1 className="gradient-text">Transactions</h1>
        <div className="button-container">
          <button onClick={handleBackClick} className="back-btn">
            <img src={iconsMap.back} alt="Back" className="back-icon" />
            <span style={{fontSize: '1rem'}}>Back</span>
          </button>

          <button onClick={handleExportClick} className="export-btn">
            <img src={iconsMap.export} alt="Export" className="export-icon" />
            <span style={{fontSize: '1rem'}}>Export</span>
          </button>
        </div>
      </header>

      {!loading
        ? (
          <div className="card">
            {visibleTransactions.length === 0 && !loading
              ? (<div className="no-data">No transactions found.</div>)
              : (
                <table aria-label="Transactions table" className="transaction-table">
                  <thead>
                    <tr>
                      <th align="left">Date</th>
                      <th align="left">Description</th>
                      <th align="left">Payment Type</th>
                      <th align="right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleTransactions.map((tx) => (
                      <tr key={tx.id}>
                        <td>{formatDate(tx.date)}</td>
                        <td>{tx.description}</td>
                        <td>{tx.paymentType}</td>
                        <td align="right">{formatAmount(tx.amount)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
            }

            {hasMore && (
              <div ref={bottomRef} className="view-more-container">
                <button onClick={loadMore} className="view-more-button">
                  <span className="gradient-text">View More (10)</span>
                </button>
              </div>
            )}
          </div>
        )
        : (<LoadingSpinner />)
      }      
    </div>
  );
}