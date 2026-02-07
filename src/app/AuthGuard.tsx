import type { JSX } from "react";
import { useAuthStore } from "../store/authStore";
import { Navigate } from "react-router-dom";

/*
 Route guard that protects authenticated routes.
 Unauthenticated users are redirected to the login page.
*/
export default function AuthGuard({ children }: { children: JSX.Element }) {
    const user = useAuthStore((state) => state.user);
    return user
        ? children
        : <Navigate to="/login" replace />;
}