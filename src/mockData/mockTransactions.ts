import type { Transaction } from "../types/banking";
import { PaymentTypes } from "../types/payments";


export const mockTransactions: Transaction[] = Array.from(
    { length: 120 },
    (_, index) => ({
        id: `TRX-${1000 + index}`,
        date: `2024-${String(index % 12 + 1).padStart(2, '0')}-${String(index % 28 + 1).padStart(2, '0')}`,
        amount: parseFloat((Math.random() * 100000).toFixed(2)),
        description: `Transaction ${index + 1} description would go here. This is a mock transaction for testing purposes.`,
        paymentType: PaymentTypes[Object.keys(PaymentTypes)[index % Object.keys(PaymentTypes).length] as keyof typeof PaymentTypes]
    })
);