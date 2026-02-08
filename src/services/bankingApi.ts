import type { Account, Transaction } from "../types/banking";

/*
  Simulate backend API for data. Mirrors real async data fetching patterns
*/

export async function fetchAccount(): Promise<Account[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [
    {
      id: "10001",
      name: "Ironman Stark",
      balance: 1234560.98,
      currency: "USD",
    },
    {
      id: "10002",
      name: "Spiderman Parker",
      balance: 82000.0,
      currency: "CAD",
    },
    {
      id: "10003",
      name: "Batman Wayne",
      balance: 356.52,
      currency: "USD",
    },
    {
      id: "10004",
      name: "John Doe Corp",
      balance: 18634623.32,
      currency: "USD",
    },
  ];
}

export async function fetchTransactions(
  accountId: string,
): Promise<Transaction[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: "T10001",
      date: "2025-04-16",
      amount: -5245.83,
      description: "Client payment",
    },
    {
      id: "T10002",
      date: "2025-08-02",
      amount: -82000.0,
      description: "Building annual lease payment",
    },
    {
      id: "T10003",
      date: "2025-08-06",
      amount: 325600.74,
      description: "Business Transaction",
    },
    {
      id: "T10004",
      date: "2025-12-15",
      amount: 100000.0,
      description: "Bonus from client",
    },
  ];
}
