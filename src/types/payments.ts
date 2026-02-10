export const PaymentTypes = {
  MONEY_ORDER: 'Money Order',
  WIRE: 'Wire Transfer',
  DEBIT: 'Debit Card',
  CREDIT: 'Credit Card',
  ZELLE: 'Zelle',
}

export type PaymentType = typeof PaymentTypes[keyof typeof PaymentTypes];

export interface PaymentRequest {
  fromAccountId: string;
  recipient: string;
  paymentType: PaymentType;
  amount: string;
  memo: string;
  paymentDate: string;
  referenceId: string;
}
