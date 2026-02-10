import { Outlet } from "react-router-dom";
import { useState } from "react";
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
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    return (
        <div className="app-shell">
            <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="main-content">
                <Header onMenuClick={() => setIsSidebarOpen(true)} />

                <main className="page-container">
                        {/* Main content will be rendered here */}
                        <Outlet />
                </main>
                
                <Footer />
            </div>

            {/* Overlay for mobile */}
            {isSidebarOpen && <div className="overlay" onClick={() => setIsSidebarOpen(false)} />}
        </div>
    );
 }