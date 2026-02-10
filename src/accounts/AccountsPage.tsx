import { useEffect, useState } from "react";
import type { Account } from "../types/banking";
import { useNavigate } from "react-router-dom";
import { fetchAccount } from "../services/bankingApi";
import AccountCard from "./AccountCard";
import LoadingSpinner from "../components/LoadingSpinner";
import ErrorState from "../components/ErrorState";

/*
  Accounts overview page.
*/
export default function AccountsPage() {
    const [loading, setLoading] = useState(true);
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        fetchAccount()
            .then(setAccounts)
            .catch(() => setError("Failed to load accounts"))
            .finally(() => setLoading(false));
    }, []);

    if (error) return <ErrorState message={error} />

    return (
        <section className="accounts-container">
            <header>
                <h1 className="gradient-text">Accounts</h1>
            </header>

            {!loading
                ? (
                    <div className="account-grid card">
                        {accounts.map((acc) => (
                            <AccountCard key={acc.id} account={acc} onSelect={(id) => navigate(`/accounts/${id}`)} />
                        ))}
                    </div>
                )
                : (<LoadingSpinner />)
            }
            
        </section>
    );
}