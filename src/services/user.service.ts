import { mockUser } from "../mockData/mockUser";
import type { User } from "../types/user";


/*
  Simulate backend API for data. Mirrors real async data fetching patterns
*/
export async function fetchUserInfo(): Promise<User> {
  await new Promise((resolve) => setTimeout(resolve, 500));

  return mockUser;
}
