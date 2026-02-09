import { useReducer, useState } from "react";
import './payments.css';
import { initialPaymentState, paymentReducer } from "./paymentReducer";

/**
 * Transfer form for moving money between accounts.
 */
export default function TransferForm() {
  // const [amount, setAmount] = useState("");
  // const [name, setName] = useState("");
  const [form, dispatch] = useReducer(paymentReducer, initialPaymentState);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    dispatch({
      type: "SET_FIELD",
      field: e.target.name as keyof typeof initialPaymentState,
      value: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      ...form,
      amount: Number(form.amount),
    };
    dispatch({ type: "LOAD_DRAFT", payload });
    setSuccess(true);
  }

  return (
    <form onSubmit={handleSubmit} className="form-section">
      <div className="amount-container">
        <label htmlFor="fromAccount">From Account</label>
        <select id="fromAccount" style={{width: '100%'}}
          name="fromAccount"
          required
          value={form.fromAccountId}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="recipient">Recipient</label>
        <input id="recipient" style={{width: '100%'}}
          name="recipient"
          type="text"
          required
          value={form.recipient}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType" style={{width: '100%'}}
          name="paymentType"
          required
          value={form.paymentType}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" style={{width: '100%'}}
          type="number"
          required
          value={form.amount}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="memo">Memo</label>
        <input id="memo" style={{width: '100%'}}
          type="text"
          required
          value={form.memo}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="paymentDate">Payment Date</label>
        <input id="paymentDate" style={{width: '100%'}}
          type="date"
          required
          value={form.paymentDate}
          onChange={handleChange}
        />
      </div>
      <div className="amount-container">
        <label htmlFor="referenceId">Reference ID</label>
        <input id="referenceId" style={{width: '100%'}}
          type="number"
          disabled={true}
          value={form.referenceId}
          onChange={handleChange}
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