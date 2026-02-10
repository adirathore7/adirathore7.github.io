import { useEffect, useState } from "react";
import { fetchAccountSummary } from "../services/bankingApi";
import type { Account } from "../types/banking";
import LoadingSpinner from "../components/LoadingSpinner";
import { formatAmount } from "../utils/amountFormat";

/*
  This component shows high-level balance across accounts.
*/
export default function AccountSummary() {
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadData = async() => {
            setLoading(true);
            try {
                const data = await fetchAccountSummary();
                setAccounts(data);
            } catch (error) {
                console.error("Error fetching account summary:", error);
                throw error;
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    return (
        <article className="card">
            <header>
                <h3 style={{marginTop: 0}}>Account Summary</h3>
            </header>

            {!loading
                ? (
                    accounts.map((account) => (
                        <section key={account.name} className="account-row">
                            <p className="account-summary-name">{account.name}</p>
                            <p className="account-summary-balance">{formatAmount(account.balance)} {account.currency}</p>
                        </section>
                    ))
                )
                : (<LoadingSpinner />)}
        </article>
    );
}