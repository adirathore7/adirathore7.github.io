import { useReducer, useState, type ChangeEvent } from "react";
import { initialPaymentState, paymentReducer } from "./paymentReducer";
import { PaymentTypes } from "../types/payments";
import { mockAccounts } from "../mockData/mockAccounts";
import { formatAmount } from "../utils/amountFormat";
import './payments.css';
import { paymentValidation } from "../utils/validateFields";

/**
 * Transfer form for moving money between accounts.
 */
export default function TransferForm() {
  const [form, dispatch] = useReducer(paymentReducer, initialPaymentState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [success, setSuccess] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;

    dispatch({
      type: "SET_FIELD",
      field: name as keyof typeof initialPaymentState,
      value: value,
    });
    setErrors((prev) => ({ ...prev, [name]: "" }));
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

    const isValid = paymentValidation(form, setErrors);
    if (!isValid) return;

    dispatch({ type: "LOAD_DRAFT", payload: form });
    clearForm();
    setSuccess(true);

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  }

  function clearForm() {
    dispatch({ type: "RESET_FORM" });
    setSuccess(false);
    setErrors({});
  }

  return (
    <form onSubmit={handleSubmit} onReset={clearForm} className="form-section">
      <div className="form-group">
        <label htmlFor="fromAccount">From Account</label>
        <select id="fromAccountId"
          name="fromAccountId"
          value={form.fromAccountId}
          onChange={handleChange}
        >
          <option value="">Select an account</option>
          {mockAccounts.map((acc) => (
            <option key={acc.id} value={acc.id}>{`${acc.id} - ${acc.name}`}</option>
          ))}
        </select>
        {errors.fromAccountId && <p className="error">{errors.fromAccountId}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="recipient">Recipient</label>
        <input id="recipient"
          name="recipient"
          type="text"
          value={form.recipient}
          onChange={handleChange}
          placeholder="Enter recipient's name"
        />
        {errors.recipient && <p className="error">{errors.recipient}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="paymentType">Payment Type</label>
        <select id="paymentType"
          name="paymentType"
          value={form.paymentType}
          onChange={handleChange}
        >
          <option value="">Select a payment type</option>
          {PaymentTypes && Object.values(PaymentTypes).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
        {errors.paymentType && <p className="error">{errors.paymentType}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount</label>
        <input id="amount"
          name="amount"
          type="text"
          value={form.amount}
          onChange={handleChange}
          onBlur={handleAmountBlur}
          onFocus={handleAmountFocus}
          placeholder="Enter $ value"
        />
        {errors.amount && <p className="error">{errors.amount}</p>}
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
          value={form.paymentDate}
          onChange={handleChange}
          placeholder="Select a date"
        />
        {errors.paymentDate && <p className="error">{errors.paymentDate}</p>}
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