import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Footer from "./Footer";
import "./layout.css";
/*
 AppLayout composes few semantic components:
    - Header
    - Main content area
    - Sidebar
    - Footer

 It also applies some basic styling to ensure a consistent look and feel across the app.
 */

 export default function AppLayout() {
    return (
        <div className="app-shell">
            <Sidebar />

            <div className="main-content">
                <Header />

                <main className="page-container">
                        {/* Main content will be rendered here */}
                        <Outlet />
                </main>
            </div>

            <Footer />
        </div>
    );
 }