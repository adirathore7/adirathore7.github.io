import TransferForm from "./TransformForm";
import './payments.css';

/**
 * Payments landing page.
 */
export default function PaymentsPage() {
    return (
        <section className="payments-container">
            <h2 className="gradient-text">Payments</h2>

            <TransferForm />
        </section>
    );
}