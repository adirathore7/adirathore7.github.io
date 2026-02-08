import { useState } from "react";
import './payments.css';
import { PaymentType } from "../types/payments";

/**
 * Transfer form for moving money between accounts.
 */
export default function TransferForm() {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="amount-container">
        <label htmlFor="name">Name</label>
        <input id="name" style={{width: '100%'}}
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" style={{width: '100%'}}
          type="number"
          required
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button className="button-primary" style={{ marginTop: 16 }}>
        Submit Transfer
      </button>

      {success && (
        <p style={{ marginTop: 12, color: "#065f46" }}>
          Transfer submitted successfully.
        </p>
      )}
    </form>
  );
}