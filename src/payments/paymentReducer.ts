import type { PaymentRequest } from "../types/payments";

export type PaymentAction =
  | { type: "SET_FIELD"; field: keyof PaymentRequest; value: string }
  | { type: "RESET_FORM" }
  | { type: "LOAD_DRAFT"; payload: PaymentRequest };

export const initialPaymentState: PaymentRequest = {
  fromAccountId: "",
  recipient: "",
  paymentType: "",
  amount: "",
  memo: "",
  paymentDate: "",
  referenceId: generateReferenceId(),
};

export function paymentReducer(state: PaymentRequest, action: PaymentAction): PaymentRequest {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return {...initialPaymentState, referenceId: generateReferenceId()};
    case "LOAD_DRAFT":
      return action.payload;
    default:
      return state;
  }
}

export function generateReferenceId() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < 12; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
