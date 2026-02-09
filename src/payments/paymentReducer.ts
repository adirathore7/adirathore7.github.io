import type { PaymentRequest } from "../types/payments";

export type PaymentAction =
  | { type: "SET_FIELD"; field: keyof PaymentRequest; value: string }
  | { type: "RESET_FORM" }
  | { type: "LOAD_DRAFT"; payload: PaymentRequest };

export const initialPaymentState: PaymentRequest = {
  fromAccountId: "",
  recipient: "",
  paymentType: "ACH",
  amount: 0,
  memo: "",
  paymentDate: "",
  referenceId: "",
};

export function paymentReducer(state: PaymentRequest, action: PaymentAction): PaymentRequest {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET_FORM":
      return initialPaymentState;
    case "LOAD_DRAFT":
      return action.payload;
    default:
      return state;
  }
}
