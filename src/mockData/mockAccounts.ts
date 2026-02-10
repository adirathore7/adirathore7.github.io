import type { Account } from "../types/banking";

export const mockAccounts: Account[] = Array.from(
    { length: 14 },
    (_, index) => ({
        id: `ACC-${1000 + index}`,
        name: `User ${index + 1}`,
        balance: parseFloat((Math.random() * 1000000).toFixed(2)),
        currency: index % 2 === 0 ? "USD" : "CAD",
    })
);