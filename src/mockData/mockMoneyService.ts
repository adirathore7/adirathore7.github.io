import type { MoneyService } from "../types/moneyService";

export const mockMoneyServices: MoneyService[] = Array.from(
    { length: 3 },
    (_, i) => ({
        id: `service-${i + 1}`,
        name: i === 0 ? 'Transfer between Accounts' : i === 1 ? 'Pay a Bill' : 'Zelle',
        description: `This is where selected service details would be shown.`
    })
);