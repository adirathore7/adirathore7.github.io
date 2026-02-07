import { create } from "zustand";

/*
 Represents a logged-in user. Kept minimal to mirror typical frontend auth state.
*/
interface User {
    name: string;
    // Add other user properties as needed
}

/*
 Global authentication store. Replaces prop drilling and keeps auth state centralized.
*/
interface AuthState {
    user: User | null;
    login: (user: User) => void;
    logout: () => void;
}

/*
 Zustand store for authentication. Chosen over Context API for better performance and scalability.
*/
export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    login: (user: User) => set({ user }), // set the user on login
    logout: () => set({ user: null }), // clear the user on logout
}));