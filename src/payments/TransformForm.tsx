import { useReducer, useState } from "react";
import { initialPaymentState, paymentReducer } from "./paymentReducer";
import { PaymentTypes } from "../types/payments";
import { mockAccounts } from "../mockData/mockAccounts";
import './payments.css';
import { formatAmount } from "../utils/amountFormat";

/**
 * Transfer form for moving money between accounts.
 */
export default function TransferForm() {
  const [form, dispatch] = useReducer(paymentReducer, initialPaymentState);
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    dispatch({
      type: "SET_FIELD",
      field: name as keyof typeof initialPaymentState,
      value: value,
    });
  }

  function handleAmountBlur() {
    if (form.amount) {
      const formatted = formatAmount(Number(form.amount));
      dispatch({
        type: "SET_FIELD",
        field: "amount" as keyof typeof initialPaymentState,
        value: formatted,
      });
    }
  }

  function handleAmountFocus() {
    if (form.amount) {
      const raw = String(form.amount).replace(/[^0-9.]/g, "");
      dispatch({
        type: "SET_FIELD",
        field: "amount" as keyof typeof initialPaymentState,
        value: raw,
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const payload = {
      ...form,
    };
    dispatch({ type: "LOAD_DRAFT", payload });
    clearForm();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  function clearForm() {
    dispatch({ type: "RESET_FORM" });
    setSuccess(false);
  }

  return (
    <form onSubmit={handleSubmit} onReset={clearForm} className="form-section">
      <div className="form-group">
        <label htmlFor="fromAccount">From Account</label>
        <select id="fromAccountId"
          name="fromAccountId"
          required
          value={form.fromAccountId}
          onChange={handleChange}
        >
          <option value="">Select an account</option>
          {mockAccounts.map((acc) => (
            <option key={acc.id} value={acc.id}>{`${acc.id} - ${acc.name}`}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input id="recipient"
          name="recipient"
          type="text"
          required
          value={form.recipient}
          onChange={handleChange}
          placeholder="Enter recipient's name"
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType"
          name="paymentType"
          required
          value={form.paymentType}
          onChange={handleChange}
        >
          <option value="">Select a payment type</option>
          {PaymentTypes && Object.values(PaymentTypes).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input id="amount"
          name="amount"
          type="text"
          required
          value={form.amount}
          onChange={handleChange}
          onBlur={handleAmountBlur}
          onFocus={handleAmountFocus}
          placeholder="Enter $ value"
        />
      </div>
      <div className="form-group">
        <label htmlFor="memo">Memo</label>
        <input id="memo"
          name="memo"
          type="text"
          value={form.memo}
          onChange={handleChange}
          placeholder="Optional: Add a brief note"
        />
      </div>
      <div className="form-group">
        <label htmlFor="paymentDate">Payment Date</label>
        <input id="paymentDate"
          name="paymentDate"
          type="date"
          required
          value={form.paymentDate}
          onChange={handleChange}
          placeholder="Select a date"
        />
      </div>
      <div className="form-group">
        <label htmlFor="referenceId">Reference ID</label>
        <input id="referenceId"
          name="referenceId"
          type="text"
          disabled={true}
          value={form.referenceId}
        />
      </div>

      <div className="form-buttons">
        <button className="button-primary" type="submit">
          Submit Transfer
        </button>

        <button className="button-secondary" type="reset">
          Clear Form
        </button>
      </div>

      {success && (
        <p style={{ marginTop: 12, color: "#065f46" }}>
          Transfer submitted successfully.
        </p>
      )}
    </form>
  );
}