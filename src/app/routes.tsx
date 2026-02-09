import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import AuthGuard from "./AuthGuard";
import AppLayout from "../layout/AppLayout";
import DashboardPage from "../dashboard/DashboardPage";
import AccountsPage from "../accounts/AccountsPage";
import TransactionsPage from "../accounts/TransactionsPage";
import PaymentsPage from "../payments/PaymentsPage";
import ActivityPage from "../activity/ActivityPage";

/*
 App routes. AuthGuard ensures protected access.
*/
export const router = createBrowserRouter([
    { path: "/login", element: <LoginPage /> },
    { path: "/",
        element: (
            <AuthGuard>
                <AppLayout />
            </AuthGuard>
        ),
        children: [
            {index: true, element: <DashboardPage />},
            {path: "accounts", element: <AccountsPage />},
            {path: "accounts/:accountId", element: <TransactionsPage />},
            {path: "payments", element: <PaymentsPage />},
            {path: "activity-log", element: <ActivityPage />}
        ],
    },
]);