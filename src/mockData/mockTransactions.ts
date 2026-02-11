import type { Transaction } from "../types/banking";
import { PaymentTypes } from "../types/payments";


export const mockTransactions: Transaction[] = Array.from(
    { length: 120 },
    (_, index) => ({
        id: `TRX-${1000 + index}`,
        date: `2024-${String(index % 12 + 1).padStart(2, '0')}-${String(index % 28 + 1).padStart(2, '0')}`,
        amount: parseFloat((Math.random() * 100000).toFixed(2)),
        description: generateRandomDescription(index),
        paymentType: PaymentTypes[Object.keys(PaymentTypes)[index % Object.keys(PaymentTypes).length] as keyof typeof PaymentTypes]
    })
);

function generateRandomDescription(index: number): string {
    const descriptions = [
        "Payment for services rendered",
        "Monthly subscription fee",
        "Refund for returned goods",
        "Interest earned on account",
        "Transfer from another account",
        "Deposit from customer payment",
        "Withdrawal for business expenses",
        "Dividend payment from investment",
        "Loan repayment received",
        "Tax refund deposit",
        "Payment for invoice #12345",
        "Subscription renewal charge",
        "Refund for overpayment",
        "Interest payment on savings account",
        "Transfer to another account",
        "Deposit from client payment",
        "Withdrawal for office supplies",
        "Dividend payment from stock holdings",
        "Loan repayment sent",
        "Tax payment made",
        "Payment for consulting services",
        "Subscription cancellation refund",
        "Refund for damaged goods",
        "Interest earned on CD",
        "Transfer from savings to checking",
        "Deposit from payroll",
        "Withdrawal for travel expenses",
        "Dividend payment from mutual fund",
        "Loan repayment received",
        "Tax refund deposit",
        "Payment for invoice #67890",
        "Subscription renewal charge",
        "Refund for overpayment",
        "Interest payment on savings account",
        "Transfer to another account",
        "Deposit from client payment",
        "Withdrawal for office supplies",
    ];
    return descriptions[index % descriptions.length];
}