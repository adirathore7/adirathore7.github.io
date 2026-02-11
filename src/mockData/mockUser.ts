import type { User } from "../types/user";

export const mockUser: User = {
    id: "user-123",
    name: "Test User",
    email: "test@email.com",
    phoneNumber: "1234567890",
    password: "password123",
    address: "123 Main St, Anytown, USA",
    accounts: ['Checking Account', 'Savings Account', 'USD Account', 'CAD Account', 'Investment Account', 'Money Movement'],
};
