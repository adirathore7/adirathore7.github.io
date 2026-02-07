import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import AuthGuard from "./AuthGuard";
import AppLayout from "../layout/AppLayout";
import DashboardPage from "../dashboard/DashboardPage";

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
            {path: "accounts", element: <div>Accounts Page</div>},
            {path: "payments", element: <div>Payments Page</div>},
            {path: "activity-log", element: <div>Activity Log Page</div>},
        ],
    },
]);