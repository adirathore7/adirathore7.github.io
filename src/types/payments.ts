export type PaymentType = "ACH" | "WIRE" | "INTERNAL";

export interface PaymentRequest {
  fromAccountId: string;
  recipient: string;
  paymentType: PaymentType;
  amount: number;
  memo: string;
  paymentDate: string;
  referenceId: string;
}
