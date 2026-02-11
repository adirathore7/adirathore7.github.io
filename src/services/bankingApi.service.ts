import { mockAccounts } from "../mockData/mockAccounts";
import { mockAccountSummary } from "../mockData/mockAccountSummary";
import { mockMoneyServices } from "../mockData/mockMoneyService";
import { mockTransactions } from "../mockData/mockTransactions";
import type { Account, Transaction } from "../types/banking";
import type { MoneyService } from "../types/moneyService";

/*
  Simulate backend API for data. Mirrors real async data fetching patterns
*/

export async function fetchAccount(): Promise<Account[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return [...mockAccounts];
}

export async function fetchTransactions(accountId?: string): Promise<Transaction[]> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log(accountId);

  return [...mockTransactions];
}

export async function fetchAccountSummary(): Promise<Account[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockAccountSummary];
}

export async function fetchMoneyServices(): Promise<MoneyService[]> {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...mockMoneyServices];
}
