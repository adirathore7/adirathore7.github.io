import TransferForm from "./TransformForm";
import './payments.css';

/**
 * Payments landing page.
 */
export default function PaymentsPage() {
    return (
        <section className="payments-container">
            <header>
                <h1 className="gradient-text">Payments</h1>
            </header>

            <TransferForm />
        </section>
    );
}