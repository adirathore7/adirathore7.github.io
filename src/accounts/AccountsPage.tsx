import { Suspense, useEffect, useState } from "react";
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
    const [accounts, setAccounts] = useState<Account[]>([]);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchAccount()
            .then(setAccounts)
            .catch(() => setError("Failed to load accounts"));
    }, []);

    if (error) return <ErrorState message={error} />

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <h2 className="gradient-text">Accounts</h2>

            <div className="account-grid">
                {accounts.map((acc) => (
                    <AccountCard key={acc.id} account={acc} onSelect={(id) => navigate(`/accounts/${id}`)} />
                ))}
            </div>
        </Suspense>
    );
}