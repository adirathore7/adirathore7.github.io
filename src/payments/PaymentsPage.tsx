import { useEffect, useState } from "react";
import TransferForm from "./TransformForm";
import './payments.css';
import LoadingSpinner from "../components/LoadingSpinner";

/**
 * Payments landing page.
 */
export default function PaymentsPage() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);
    
    return (
        <section className="payments-container">
            <header>
                <h1 className="gradient-text">Payments</h1>
            </header>

            {!loading
                ? (
                    <div className="card">
                        <TransferForm />
                    </div>
                )
                : (<LoadingSpinner />)}
        </section>
    );
}