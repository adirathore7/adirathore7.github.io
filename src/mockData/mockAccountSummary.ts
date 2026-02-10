import type { Account } from "../types/banking";

const accountNames = [
    'Checking Account',
    'Savings Account',
    'USD Account',
    'CAD Account',
    'Investment Account',
] as const;

function getCurrency(index: number, accountName: string): string {
    switch (accountName) {
        case 'Checking Account':
        case 'Savings Account':
        case 'Investment Account':
            return index % 2 === 0 ? 'USD' : 'CAD';
        case 'USD Account':
            return 'USD';
        case 'CAD Account':
            return 'CAD';
        default:
            return 'USD';
    }
}

export const mockAccountSummary: Account[] = Array.from(
    { length: 4 },
    (_, index) => ({
        id: `ACC-${1000 + index}`,
        name: accountNames[index % accountNames.length],
        balance: parseFloat((Math.random() * 1000000).toFixed(2)),
        currency: getCurrency(index, accountNames[index % accountNames.length])
    })
);